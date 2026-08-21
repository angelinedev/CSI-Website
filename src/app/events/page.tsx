
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock } from 'lucide-react';
import { Card } from '@/components/ui/card';

const allEvents = [
  {
    title: 'THINQNIQUE',
    description: 'Join us for the ultimate Thinqnique event. Registration is now open!',
    date: 'August 25, 2026',
    time: '10:00 AM onwards',
    image: '/posters/THINQNIQUE_B.2026jpg.jpeg',
    hint: 'thinqnique upcoming',
    status: 'Upcoming',
    link: 'https://think-unique.vercel.app/',
  },
  {
    title: 'PROMPTX',
    description: 'Master the art of prompting in this AI-focused PromptX competition.',
    date: 'March 27, 2026',
    time: '12:40 PM onwards',
    image: '/posters/PROMPTX_B.jpg',
    hint: 'promptx',
    status: 'Past',
  },
  {
    title: 'GARTIC',
    description: 'Showcase your creativity and guessing skills in this fun-filled Gartic event.',
    date: 'March 11, 2026',
    time: '12:40 PM onwards',
    image: '/posters/GARTIC_B.jpg',
    hint: 'gartic',
    status: 'Past',
  },
  {
    title: 'SCRIBBLE',
    description: 'A creative event where you draw and guess in an exciting game of Scribble.',
    date: 'March 09, 2026',
    time: '12:40 PM onwards',
    image: '/posters/SCRIBBLE_B.jpg',
    hint: 'scribble',
    status: 'Past',
  },
  {
    title: 'GLITCHFIX',
    description: 'Put your debugging skills to the test and fix the glitches in this challenging event.',
    date: 'January 24, 2026',
    time: '12:40 PM onwards',
    image: '/posters/GLITCHFIX_B.jpg',
    hint: 'glitchfix',
    status: 'Past',
  },
  {
    title: 'THINQNIQUE',
    description: 'Test your critical thinking and unique problem-solving abilities in Thinqnique.',
    date: 'September 16, 2025',
    time: '10:00 AM onwards',
    image: '/posters/THINQNIQUE_B.jpg',
    hint: 'thinqnique',
    status: 'Past',
  },
  {
    title: 'POSTER - ON',
    description: 'A poster presentation competition to visualize and present your technical ideas.',
    date: 'April 23, 2025',
    time: '11:00 AM - 1:00 PM',
    image: 'https://res.cloudinary.com/dfi26rd6m/image/upload/v1756404461/POSTER_viwzgl.avif',
    hint: 'poster presentation',
    status: 'Past',
  },
  {
    title: 'WORKSHOP: NETWORKING AND COMMUNICATION',
    description: 'A hands-on workshop on the fundamentals of networking and communication protocols.',
    date: 'April 02, 2025',
    time: '10:00 AM - 1:00 PM',
    image: 'https://res.cloudinary.com/dfi26rd6m/image/upload/v1756404576/POSTER_e5eme5.avif',
    hint: 'network workshop',
    status: 'Past',
  },
  {
    title: 'CODE UNRAVEL',
    description: 'Unravel complex coding problems and showcase your debugging prowess.',
    date: 'March 06, 2025',
    time: '1:00 PM - 3:00 PM',
    image: 'https://res.cloudinary.com/dfi26rd6m/image/upload/v1756404519/POSTER_hx3dgu.avif',
    hint: 'code puzzle',
    status: 'Past',
  },
  {
    title: 'HACKATHON: INNOVEXON',
    description: 'A 24-hour hackathon to build innovative solutions and win exciting prizes.',
    date: 'September 04, 2024',
    time: 'All Day',
    image: 'https://res.cloudinary.com/dfi26rd6m/image/upload/v1756404547/innovexon_poster_beehro.avif',
    hint: 'hackathon innovation',
    status: 'Past',
  },
  {
    title: 'ALCODE',
    description: 'A competitive coding contest to challenge your algorithmic skills.',
    date: 'August 21, 2024',
    time: '10:00 AM onwards',
    image: 'https://res.cloudinary.com/dfi26rd6m/image/upload/v1756404485/POSTER_yk38m1.avif',
    hint: 'algorithm code',
    status: 'Past',
  },
];

const upcomingEvents = allEvents.filter(event => event.status === 'Upcoming');
const pastEvents = allEvents.filter(event => event.status === 'Past');


const EventCard = ({ event }: { event: (typeof allEvents)[0] }) => (
    <Card className="group overflow-hidden glassmorphic rounded-lg flex flex-col h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 ring-offset-background hover:ring-2 hover:ring-ring hover:ring-offset-2">
        <div className="flex flex-col md:flex-row">
            <div className="md:w-2/5 h-64 md:h-auto overflow-hidden">
                <Image
                src={event.image}
                alt={event.title}
                width={600}
                height={400}
                data-ai-hint={event.hint}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
            </div>
            <div className="p-6 flex flex-col md:w-3/5">
                <div className="flex justify-between items-start mb-2">
                    <Badge variant={event.status === 'Upcoming' ? 'default' : 'secondary'} className="bg-primary/20 text-primary border-primary/30">
                        {event.status}
                    </Badge>
                </div>
                <h3 className="text-2xl font-bold text-card-foreground">{event.title}</h3>
                <p className="mt-2 text-muted-foreground flex-grow">{event.description}</p>
                <div className="mt-4 space-y-2 text-sm text-foreground/70">
                    <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-primary" />
                        <span>{event.time}</span>
                    </div>
                </div>
                {event.status === 'Upcoming' && (
                  'link' in event && event.link ? (
                    <Button asChild className="mt-6 w-full md:w-auto self-start">
                      <a href={event.link as string} target="_blank" rel="noopener noreferrer">Register Now</a>
                    </Button>
                  ) : (
                    <Button className="mt-6 w-full md:w-auto self-start">Register Now</Button>
                  )
                )}
            </div>
        </div>
    </Card>
);


export default function EventsPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <ScrollReveal>
        <h1 className="text-4xl font-bold tracking-tighter text-center md:text-5xl">
          Our Events
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-center text-muted-foreground md:text-lg">
          Join us for a variety of technical and non-technical events designed to foster learning, innovation, and community.
        </p>
      </ScrollReveal>

      <section className="mt-16 md:mt-24">
        <ScrollReveal>
            <h2 className="text-3xl font-bold text-center tracking-tight md:text-4xl">
                Upcoming Events
            </h2>
             <p className="mt-4 max-w-3xl mx-auto text-center text-muted-foreground md:text-lg">
                Stay tuned for our next big thing.
            </p>
        </ScrollReveal>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {upcomingEvents.map((event, index) => (
            <ScrollReveal key={event.title} delay={100 * (index % 2)}>
                <EventCard event={event} />
            </ScrollReveal>
            ))}
        </div>
      </section>

      <section className="mt-16 md:mt-24">
         <ScrollReveal>
            <h2 className="text-3xl font-bold text-center tracking-tight md:text-4xl">
                Past Events
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-center text-muted-foreground md:text-lg">
                A look back at our memorable moments.
            </p>
        </ScrollReveal>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {pastEvents.map((event, index) => (
                <ScrollReveal key={event.title} delay={100 * (index % 2)}>
                    <EventCard event={event} />
                </ScrollReveal>
            ))}
        </div>
      </section>
    </div>
  );
}
