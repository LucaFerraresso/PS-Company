import TechCard from "../components/TechCard";
import icons from "../data/TechStack";

const About = () => {
  return (
    <div className="text-center py-12">
      <h1 className="text-4xl font-bold mb-4 text-primary">Chi Sono</h1>

      <p className="text-xl mb-6 max-w-3xl mx-auto text-gray-800">
        Sono uno sviluppatore appassionato di design, front-end e animazioni. Mi
        piace creare esperienze interattive e intuitive per gli utenti, mettendo
        sempre la creatività e la funzionalità al centro dei miei progetti.
      </p>

      <p className="text-lg mb-6 max-w-3xl mx-auto text-gray-600">
        Ho partecipato a un bootcamp intensivo di 6 mesi, dove ho approfondito
        le tecnologie e le metodologie del mondo dello sviluppo front-end.
        Durante il corso, ho acquisito competenze su una varietà di strumenti e
        linguaggi come HTML, CSS, JavaScript, React, e molti altri.
      </p>

      <p className="text-lg mb-6 max-w-3xl mx-auto text-gray-600">
        Oggi, come sviluppatore front-end, mi concentro sulla creazione di
        interfacce utente moderne e responsive, utilizzando le migliori pratiche
        di sviluppo e design.
      </p>

      <h2 className="text-2xl font-bold mt-8 text-primary">
        Le mie competenze
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 px-4">
        {icons.map((icon, index) => (
          <TechCard key={index} icon={icon} />
        ))}
      </div>
    </div>
  );
};

export default About;
