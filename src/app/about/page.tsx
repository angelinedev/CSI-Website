
'use client';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import Image from 'next/image';
import PixelCard from '@/components/shared/pixel-card';
import TiltedCard from '@/components/shared/tilted-card';
import { GlowingCard } from '@/components/shared/glowing-card';
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Rocket, Users, Zap } from 'lucide-react';

const officeBearersData = [
  { name: 'Mrs. Vanitha Sheba M', role: 'SBC-CSI', image: 'https://res.cloudinary.com/dfi26rd6m/image/upload/v1756494084/Mrs._Vanitha_Sheba_M_dueits.avif' },
  { name: 'ANGELINE HEPHZIBAH J', role: 'President -CSI', image: '/members/Angeline_president.jpg' },
  { name: 'G.DHANALAKSHMI', role: 'Vice - President- CSI', image: '/members/dhanalakshmi Vice President.png' },
  { name: 'NASIMA R', role: 'Secretary- CSI', image: '/members/Nasima R Secretary.png' },
  { name: 'DEVASHRI V', role: 'Joint Secretary- CSI', image: '/members/Devashri V Joint secretary.jpg' },
  { name: 'THANISHCA L', role: 'Treasurer- CSI', image: '/members/Thanishca L Treasurer.jpg' },
  { name: 'AARTHI N', role: 'Joint Treasurer- CSI', image: '/members/Aarthi N Joint Treasurer.jpg' },
  { name: 'AAFRIN N', role: 'Executive Member- CSI', image: '/members/Aafrin Executive Member.jpg' },
  { name: 'LOGAPRIYA D', role: 'Executive Member- CSI', image: '/members/Logapriya D Executive Member.jpg' },
  { name: 'SOWNDARYA D', role: 'Executive Member- CSI', image: '/members/Sowndarya D Executive Member.png' },
  { name: 'AASHESH V L', role: 'Executive Member- CSI', image: '/members/AASHESH_V_L Executive Member.png' },
];

const chiefPatronsData = [
  { name: 'Dr.K.Palanikumar', role: 'Chairman' },
  { name: 'Dr.J.Dafni Rose', role: 'Vice-Chairman' },
  { name: 'Dr.B.Sreedevi', role: 'Hon.Secretary' },
  { name: 'Dr.D.Weslin', role: 'Hon.Treasurer' },
];

const missionData = [
  {
    icon: Rocket,
    title: 'Innovation',
    description:
      'We champion creative thinking and cutting-edge projects, pushing the boundaries of what\'s possible in technology.',
  },
  {
    icon: Users,
    title: 'Community',
    description:
      'We foster a collaborative environment where students can connect, share ideas, and grow together as tech enthusiasts.',
  },
  {
    icon: Zap,
    title: 'Growth',
    description:
      'We provide opportunities for skill development, learning, and career advancement through workshops and events.',
  },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <ScrollReveal>
        <h1 className="text-4xl font-bold tracking-tighter text-center md:text-5xl">
          About CSI-JCE
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-center text-muted-foreground md:text-lg">
          The Computer Society of India chapter at Jerusalem College of Engineering is dedicated to advancing the theory and practice of computer science and information technology. We aim to create a community of learners and innovators who can drive technological progress.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={200}>
        <div className="mt-12 max-w-4xl mx-auto p-8 rounded-xl glassmorphic">
          <h3 className="text-2xl font-bold text-primary">About the Computer Society of India</h3>
          <p className="mt-4 text-foreground/80">
            The Computer Society of India (CSI), founded in 1965, is India’s oldest and largest professional body for IT professionals. It promotes knowledge-sharing, skill development, and innovation in computing and emerging technologies. CSI has over 100,000 members across academia, industry, and student communities. It organizes seminars, workshops, certifications, and national-level competitions to foster tech excellence. Our college is proudly affiliated with the CSI Kancheepuram Chapter, a vibrant regional hub known for hosting dynamic student conventions and technical events.
          </p>
        </div>
      </ScrollReveal>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-center tracking-tight md:text-4xl">
              Our Mission
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-center text-muted-foreground md:text-lg">
              To inspire, educate, and empower the next generation of tech leaders.
            </p>
          </ScrollReveal>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {missionData.map((item, index) => (
              <ScrollReveal key={item.title} delay={150 * index}>
                <GlowingCard className="h-full text-center glassmorphic">
                  <CardHeader>
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <item.icon className="h-8 w-8" />
                    </div>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </GlowingCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-16 md:mt-24">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-center tracking-tight md:text-4xl">
            Chief Patrons of CSI Kancheepuram Chapter
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-center text-muted-foreground md:text-lg">
            The guiding force behind the CSI Kancheepuram Chapter.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {chiefPatronsData.map((person, index) => (
            <ScrollReveal key={index} delay={100 * (index % 4)}>
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <PixelCard>
                  <div className="text-center p-4">
                    <h3 className="text-xl font-bold text-card-foreground">{person.name}</h3>
                    <p className="text-muted-foreground mt-1">{person.role}</p>
                  </div>
                </PixelCard>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="mt-16 md:mt-24">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-center tracking-tight md:text-4xl">
            Meet the Office Bearers
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-center text-muted-foreground md:text-lg">
            The dedicated team leading the charge at the CSI-JCE chapter.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16 justify-items-center">
          {officeBearersData.map((person, index) => (
            <ScrollReveal key={index} delay={100 * (index % 4)}>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur-md opacity-60 group-hover:opacity-80 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <TiltedCard
                  imageSrc={person.image}
                  altText={person.name}
                  imageHeight="400px"
                  imageWidth="300px"
                  showTooltip={false}
                  displayOverlayContent={true}
                  overlayContent={
                    <div className="absolute bottom-4 left-4 w-auto whitespace-nowrap">
                      <div className="p-3 bg-black/50 backdrop-blur-md rounded-lg text-left">
                        <h3 className="text-lg font-bold text-white [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">{person.name}</h3>
                        <p className="text-sm text-white/80 [text-shadow:0_1px_2px_rgba(0,0,0,0.4)]">{person.role}</p>
                      </div>
                    </div>
                  }
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
