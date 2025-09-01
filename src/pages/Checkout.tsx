import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CreditCard, Loader2, Mail, User } from "lucide-react";
import { PricingService } from "../core/services/PricingService";
import { cn } from "../core/utils/cn";

const Checkout = () => {
  const { plan } = useParams();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentError, setPaymentError] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const planData = plan ? PricingService.getPlanById(plan) : undefined;
  // const paymentService = new PaymentService();

  const handleBack = () => {
    navigate("/");
  };

  const handlePayment = async () => {
    if (!planData || !email || !name) {
      setPaymentError("Пожалуйста, заполните все поля");
      return;
    }

    setIsProcessing(true);
    setPaymentError(null);

    try {
      const orderInfo = {
        orderId: `order_${Date.now()}_${Math.random()
          .toString(36)
          .substr(2, 9)}`,
        planId: planData.id,
        email,
        name,
        amount: parseFloat((planData.price as string).replace("$", "")),
        currency: "USD" as any,
      };

      // const result = await paymentService.createPayment(orderInfo);

      // if (result.success && result.data?.paymentUrl) {
      //   window.location.href = result.data.paymentUrl;
      // } else {
      //   setPaymentError(result.error?.message || "Ошибка при создании платежа");
      // }
    } catch (error) {
      setPaymentError(
        error instanceof Error ? error.message : "Неизвестная ошибка"
      );
    } finally {
      setIsProcessing(false);
    }
  };

  if (!planData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            План не найден
          </h1>
          <button onClick={handleBack} className="btn btn-primary">
            Вернуться назад
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={handleBack}
              className="flex items-center gap-2 text-gray-600 hover:text-primary-pink transition-colors"
            >
              <ArrowLeft size={20} />
              Вернуться к выбору тарифа
            </button>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-primary-dark mb-4">
              Оформление заказа
            </h1>
            <p className="text-gray-600">Тариф "{planData.title}"</p>
          </div>

          <div className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-pink focus:border-primary-pink"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Имя
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ваше имя"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-pink focus:border-primary-pink"
                />
              </div>
            </div>
          </div>

          <div className="mt-8">
            {paymentError && (
              <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-700 text-sm">{paymentError}</p>
              </div>
            )}

            <button
              onClick={handlePayment}
              disabled={isProcessing}
              className={cn(
                "w-full bg-primary-pink text-white px-6 py-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2",
                isProcessing
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-primary-pink/90"
              )}
            >
              {isProcessing ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Обработка...
                </>
              ) : (
                <>
                  <CreditCard className="w-5 h-5" />
                  Перейти к оплате
                </>
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Checkout;
