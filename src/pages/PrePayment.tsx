import { FC, useState, useMemo, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useCourse } from '../core/hooks/useCourse';
import { InvoiceService } from '../core/services/InvoiceService';
import { Tariff, Currency } from '../core/types/sections';
import CourseNotFound from '../core/components/pages/prePayment/CourseNotFound';
import OrderDetails from '../core/components/pages/prePayment/OrderDetails';
import PaymentDetails from '../core/components/pages/prePayment/PaymentDetails';
import PrePaymentLoader from '../core/components/pages/prePayment/PrePaymentLoader';
import VerticalSplitter from '../core/components/pages/prePayment/VerticalSplitter';

const PrePayment: FC = () => {
  const location = useLocation();
  const {courseUrlParam} = useParams();
  const navigate = useNavigate();
  const tariff = location.state?.tariff as Tariff;

  const { course, isLoading: courseLoading } = useCourse(courseUrlParam);

  const [selectedCurrency, setSelectedCurrency] = useState<Currency | null>(null);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!tariff) {
      navigate('/');
    }
  }, [tariff, navigate]);

  const availableCurrencies = useMemo((): Currency[] => {
    if (!tariff) return [];
    return tariff.prices.map(price => price.currency);
  }, [tariff]);

  useEffect(() => {
    if (availableCurrencies.length > 0 && !selectedCurrency) {
      setSelectedCurrency(availableCurrencies[0]);
    }
  }, [availableCurrencies, selectedCurrency]);

  const handleCurrencyChange = (currency: Currency) => {
    setSelectedCurrency(currency);
  };

  const handleSubmit = async () => {
    if (!selectedCurrency || !email) {
      setError('Please select a currency and enter your email.');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      if (course?.id) {
        const paymentUrl = await InvoiceService.createInvoice({
          courseId: course.id,
          tariffId: tariff.id,
          currencyCode: selectedCurrency.code,
          amount: +tariff.prices.find((price) => price.currency.code === selectedCurrency.code)!.price,
          email,
          name: name || undefined,
        });
        window.location.href = paymentUrl;
      }
    } catch (err) {
      console.error('Failed to create invoice:', err);
      setError('Failed to create invoice. Please try again.');
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
        <OrderDetails course={course} tariff={tariff} selectedCurrency={selectedCurrency} />
        <VerticalSplitter />
        <PaymentDetails
          availableCurrencies={availableCurrencies}
          selectedCurrency={selectedCurrency}
          onCurrencyChange={handleCurrencyChange}
          name={name}
          onNameChange={setName}
          email={email}
          onEmailChange={setEmail}
          error={error}
          isLoading={isLoading}
          onSubmit={handleSubmit}
        />
      </div>
    </section>
  );
};

export default PrePayment;