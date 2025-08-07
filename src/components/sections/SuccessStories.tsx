import type { FC } from 'react';
import { motion } from 'framer-motion';
import { Check, TrendingUp, Briefcase, Star, Rocket, User, Microscope, Monitor } from 'lucide-react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const SuccessStories: FC = () => {
  const [ref, isIntersecting] = useIntersectionObserver();

  const stats = [
    {
      icon: <TrendingUp className="w-8 h-8" style={{ color: 'rgb(239 68 68)' }} />,
      number: "500+",
      label: "Студентов прошли курс"
    },
    {
      icon: <Briefcase className="w-8 h-8" style={{ color: 'rgb(217 119 6)' }} />,
      number: "89%",
      label: "Нашли работу или заказы"
    },
    {
      icon: <Star className="w-8 h-8" style={{ color: 'rgb(234 179 8)' }} />,
      number: "4.9/5",
      label: "Средняя оценка курса"
    },
    {
      icon: <Rocket className="w-8 h-8" style={{ color: 'rgb(239 68 68)' }} />,
      number: "200+",
      label: "Созданных ботов"
    }
  ];

  const testimonials = [
    {
      icon: <User className="w-8 h-8" style={{ color: 'rgb(234 179 8)' }} />,
      name: "Алексей К.",
      role: "Junior Python Developer",
      quote: "Прошел курс за 2 месяца. Теперь у меня есть готовый проект в портфолио, который показываю на собеседованиях. Архитектура действительно профессиональная!",
      achievement: "Устроился Python разработчиком"
    },
    {
      icon: <User className="w-8 h-8" style={{ color: 'rgb(234 179 8)' }} />,
      name: "Мария С.",
      role: "Студентка ВУЗа",
      quote: "Курс помог понять, как работать с API и базами данных на практике. Лучше любого университетского курса — все по делу, без воды.",
      achievement: "Создала 3 собственных бота"
    },
    {
      icon: <Briefcase className="w-8 h-8" style={{ color: 'rgb(217 119 6)' }} />,
      name: "Дмитрий Р.",
      role: "Фрилансер",
      quote: "Взял несколько заказов на создание Telegram-ботов после курса. Клиенты довольны качеством и скоростью разработки. Окупился за первый месяц!",
      achievement: "Увеличил доход на 40%"
    },
    {
      icon: <Microscope className="w-8 h-8" style={{ color: 'rgb(59 130 246)' }} />,
      name: "Елена Т.",
      role: "QA Engineer",
      quote: "Решила перейти в разработку. Курс дал четкое понимание архитектуры проектов. Сейчас работаю Python разработчиком в стартапе.",
      achievement: "Сменила профессию"
    },
    {
      icon: <Monitor className="w-8 h-8" style={{ color: 'rgb(107 114 128)' }} />,
      name: "Игорь В.",
      role: "Системный администратор",
      quote: "Автоматизировал рабочие процессы с помощью ботов. Начальство довольно, получил повышение. Планирую создать еще несколько инструментов.",
      achievement: "Получил повышение"
    },
    {
      icon: <User className="w-8 h-8" style={{ color: 'rgb(234 179 8)' }} />,
      name: "Анна М.",
      role: "Начинающий разработчик",
      quote: "Первый реальный проект в моей карьере. Видеоуроки очень понятные, каждый шаг объяснен. Чувствую себя увереннее как разработчик.",
      achievement: "Первый проект в портфолио"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-6">
            Истории успеха наших студентов
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Реальные результаты людей, которые прошли курс и применили знания на практике
          </p>
        </motion.div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 text-center shadow-sm"
            >
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-primary-pink mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex-shrink-0">
                  {testimonial.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-primary-dark">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <blockquote className="text-gray-700 text-sm mb-4 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div className="inline-flex items-center gap-2 bg-primary-pink/10 text-primary-pink px-3 py-1 rounded-full text-xs font-medium">
                <Check className="w-3 h-3" />
                {testimonial.achievement}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center bg-white rounded-2xl p-8 shadow-sm"
        >
          <div className="text-6xl mb-4">🏆</div>
          <h3 className="text-2xl font-bold text-primary-dark mb-4">
            Проверено практикой
          </h3>
          <p className="text-lg text-gray-600">
            Более 500 студентов уже создали своих ботов и применяют навыки в работе. Присоединяйтесь к сообществу успешных разработчиков!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessStories; 