import type { Metadata } from 'next'
import Image             from 'next/image'
import Link              from 'next/link'

export const metadata: Metadata = {
  title:       'Sobre el Autor',
  description: 'Conocé la trayectoria y misión de Eduardo José Moreno, especialista en movilidad, logística e infraestructura.',
}

export default function SobreElAutorPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14">

      {/* Foto + intro */}
      <div className="flex flex-col sm:flex-row gap-10 items-start mb-12">
        <div className="flex-shrink-0 mx-auto sm:mx-0">
          <div className="w-48 h-48 relative rounded-2xl overflow-hidden border-4 border-navy-600 shadow-xl">
            <Image src="/images/autor.jpg" alt="Eduardo José Moreno" fill className="object-cover" />
          </div>
        </div>
        <div>
          <p className="text-teal-500 font-semibold text-sm uppercase tracking-widest mb-2">Sobre el Autor</p>
          <h1 className="text-4xl font-serif font-bold text-navy-600 mb-3">
            Eduardo José Moreno
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Especialista en movilidad, logística e infraestructura con más de tres décadas de experiencia en el sector público y privado de América Latina.
          </p>
        </div>
      </div>

      {/* Biografía */}
      <section className="prose-article mb-10">
        <h2>Biografía</h2>
        <p>
          Eduardo José Moreno es un reconocido profesional argentino con extensa trayectoria en el campo de la movilidad urbana, la logística internacional y la planificación de infraestructura. A lo largo de su carrera ha participado en proyectos de envergadura en Argentina, Brasil, Chile y Uruguay, trabajando tanto con organismos públicos como con empresas privadas del sector.
        </p>
        <p>
          Su formación académica incluye estudios de posgrado en gestión del transporte y planificación territorial, complementados con programas de actualización en universidades de América Latina y Europa. Esta combinación de formación rigurosa y experiencia práctica le ha permitido desarrollar una visión integral sobre los desafíos y oportunidades del sector en la región.
        </p>
        <p>
          A través de este blog, Eduardo comparte sus análisis, reflexiones y opiniones sobre los temas que marcaron su vida profesional, con el objetivo de contribuir al debate público y a la formación de nuevas generaciones de profesionales del sector.
        </p>

        <h2>Trayectoria Profesional</h2>
        <p>
          Durante más de treinta años, Eduardo ha ocupado roles de liderazgo en organizaciones clave del sector de transporte e infraestructura. Ha asesorado a gobiernos provinciales y nacionales en materia de planificación vial, ha colaborado con organismos multilaterales en proyectos de desarrollo regional y ha liderado equipos técnicos en la evaluación de grandes obras de infraestructura.
        </p>
        <p>
          Su experiencia abarca desde la planificación estratégica de sistemas de transporte urbano hasta la evaluación de proyectos de inversión en infraestructura portuaria y logística. Esta amplitud de experiencias le otorga una perspectiva única para analizar las interrelaciones entre movilidad, logística e infraestructura en el desarrollo económico regional.
        </p>

        <h2>Misión del Blog</h2>
        <p>
          Este espacio nació de la convicción de que el conocimiento técnico debe ser accesible para todos. La movilidad, la logística y la infraestructura no son temas exclusivos de especialistas: impactan directamente en la vida cotidiana de millones de personas, en el costo de los alimentos, en el tiempo que tardamos en llegar al trabajo, en la competitividad de nuestras exportaciones.
        </p>
        <p>
          Aquí encontrará análisis profundos pero escritos en lenguaje accesible, columnas de opinión basadas en evidencia, y reflexiones sobre el presente y el futuro del sector en América Latina.
        </p>
      </section>

      {/* CTA */}
      <div className="bg-navy-50 rounded-2xl p-8 text-center border border-navy-100">
        <p className="text-lg text-gray-700 mb-4">
          ¿Tiene alguna pregunta o propuesta? Con gusto respondo.
        </p>
        <Link
          href="/contacto"
          className="inline-block bg-navy-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-navy-700 transition-colors text-lg"
        >
          Escribirme →
        </Link>
      </div>
    </div>
  )
}
