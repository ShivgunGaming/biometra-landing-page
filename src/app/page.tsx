import Box from "./components/Box";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Service from "./components/Service";
import Stars from "./components/Stars";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <Stars />
      <Banner />
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:from-white  before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic  after:via-blue-200 after:blur-2xl after:content-[''] before:bg-gradient-to-br before:dark:from-transparent before:to-sky-700 before:dark:opacity-10 after:from-sky-900 after:dark:via-[#0141ff] after:opacity-40 before:lg:h-[360px]">
        <div className="flex flex-wrap gap-6 w-full h-full justify-center my-10 px-2">
          <Box name="Гаранция" description="12 месеца за всички дейности." />
          <Box name="Пристигане" description="София - аварийно до 30 мин." />
        </div>
      </div>
      <div className="flex flex-wrap gap-8 w-full h-full justify-center my-10 ">
        <Service
          title="Жилищен Ключар"
          items={[
            "Дубликат на всички видове ключове.",
            "Изработка на ключ по брава, патрон.",
            "Ремонт на патрони, брави и дръжки.",
            "Преработване на заключващи системи.",
            "Прекодиране на касови брави.",
            "Дубликат на чипове за контрол на достъп.",
            "Одит на сигурността за Вашето жилище.",
          ]}
        />
        <Service
          title="Автомобилен Ключар"
          items={[
            "Отключване на автомобил.",
            "Изработка на автоключове.",
            "Изтриване на ключ от паметта на имобилайзер система.",
            "Обучение на имобилайзер система да познава нов чип.",
            "Прекодиране на ключалка на врата, багажник, резервоар и контакт.",
            "Дубликат и ремонт на дистанционни.",
          ]}
        />{" "}
        <Service
          title="Авариен Ключар"
          items={[
            "Заключен e дома Ви?",
            "Вашата ключалка счупена ли е?",
            "Изгубен, откраднат или повреден ключ?",
            "Нуждаете се от авариен ключар? Нашите мобилни ключари извършват дискретни, аварийни отвори и ремонти в цяла София и околностите.",
            "Свържете се с нас за безплатна консултация.",
          ]}
        />{" "}
        <Service
          title="Интелигентни Брави"
          items={[
            "Продажба, монтаж и сервиз на умна ключалка.",
            "Отключване по най-безопасния начин.",
            "Смяна на кода за брава.",
            "Дубликат на дистанционно, включително и Rolling code.",
            "Wi-fi сензор за врати и прозорци.",
            "Инсталиране и обучение на приложението за управление.",
          ]}
        />{" "}
        <Service
          title="Търговски Ключар"
          items={[
            "Одит на търговски и бизнeс обектиа.",
            "Продажба и монтаж на сейфове и каси.",
            "Подмяна и прекодиране на заключващ механизам на каси и сейфове.",
            "Продажба на патрон и брава от high-security клас.",
            "Профилактика и отключване на заключващи системи от висок клас.",
          ]}
        />{" "}
        <Service
          title="Врати и Прозорци От PVC"
          items={[
            "Монтаж на заключващи системи и точкови райбери.",
            "Монтаж на обикновен, с блокировка и smart райбер.",
            "Регулиране и подмяна на механизъм-обков на врати и прозорци.",
            "Интегриране на допълнителна заключваща система.",
            "Монтаж на невидима ключалка с дистанционно.",
          ]}
        />
      </div>
      <Footer />
    </main>
  );
}
