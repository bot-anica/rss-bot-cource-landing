import { FC, useState, useMemo, useEffect, useCallback } from 'react'; // Added useCallback
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useCourse } from '../core/hooks/useCourse';
import { InvoiceService } from '../core/services/InvoiceService';
import { Tariff, Currency } from '../core/types/sections';
import CourseNotFound from '../core/components/pages/prePayment/CourseNotFound';
import OrderDetails from '../core/components/pages/prePayment/OrderDetails';
import PrePaymentLoader from '../core/components/pages/prePayment/PrePaymentLoader';
import VerticalSplitter from '../core/components/pages/prePayment/VerticalSplitter';
import PaymentForm, { PaymentFormValues } from '../core/components/pages/prePayment/PaymentForm';
import SecurityMessage from '../core/components/pages/prePayment/SecurityMessage';

const PrePayment: FC = () => {
  const location = useLocation();
  const { courseUrlParam } = useParams();
  const navigate = useNavigate();
  const tariff = location.state?.tariff as Tariff;

  const { course, isLoading: courseLoading } = useCourse(courseUrlParam);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const [formSelectedCurrencyCode, setFormSelectedCurrencyCode] = useState<string>(''); // New state for selected currency from form

  // Memoize the setter function to prevent unnecessary re-renders of PaymentForm
  const handleCurrencyCodeChange = useCallback((currencyCode: string) => {
    setFormSelectedCurrencyCode(currencyCode);
  }, []);

  useEffect(() => {
    if (!tariff) {
      navigate('/');
    }
  }, [tariff, navigate]);

  const availableCurrencies = useMemo((): Currency[] => {
    if (!tariff) return [];
    return tariff.prices.map(price => price.currency);
  }, [tariff]);

  // Determine the selected currency for OrderDetails
  const selectedCurrencyForOrderDetails = useMemo(() => {
    // Use the currency code from the form state, or default to the first available
    const currencyCodeToDisplay = formSelectedCurrencyCode || availableCurrencies[0]?.code || '';
    return availableCurrencies.find(c => c.code === currencyCodeToDisplay) || null;
  }, [availableCurrencies, formSelectedCurrencyCode]);

  const handleSubmit = async (values: PaymentFormValues) => {
    setIsLoading(true);
    setApiError(null);
    setFormSelectedCurrencyCode(values.selectedCurrencyCode); // Update state with selected currency from form

    try {
      if (course?.id) {
        const paymentUrl = await InvoiceService.createInvoice({
          courseId: course.id,
          tariffId: tariff.id,
          currencyCode: values.selectedCurrencyCode,
          amount: +tariff.prices.find((price) => price.currency.code === values.selectedCurrencyCode)!.price,
          email: values.email,
          name: values.name || undefined,
        });
        window.location.href = paymentUrl;
      }
    } catch (err) {
      console.error('Failed to create invoice:', err);
      setApiError('Failed to create invoice. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (!tariff || courseLoading) {
    return <PrePaymentLoader />;
  }

  if (!course) {
    return <CourseNotFound />;
  }

  return (
    <section className="pb-24 pt-38 lg:pt-42 xl:pt-50 lg:pb-28 xl:pb-32 relative overflow-hidden bg-gradient-to-br from-primary-pink/15 to-primary-blue/5">
      <div className="max-w-5xl h-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 bg-white p-8 rounded-lg border border-primary-blue/15 grid grid-cols-1 lg:grid-cols-[1fr_auto+1fr] gap-8">
        <OrderDetails course={course} tariff={tariff} selectedCurrency={selectedCurrencyForOrderDetails} />
        <VerticalSplitter />
        <div>
          <PaymentForm
            availableCurrencies={availableCurrencies}
            onSubmit={handleSubmit}
            isLoading={isLoading}
            apiError={apiError}
            onCurrencyCodeChange={setFormSelectedCurrencyCode}
          />
          <SecurityMessage />
        </div>
      </div>
    </section>
  );
};

export default PrePayment;