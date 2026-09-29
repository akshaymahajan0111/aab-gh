import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { home } from 'virtual:content';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Hello AI — Your Intelligent Conversational Assistant</title>
        <meta
          name="description"
          content="Hello AI is a clean, professional AI chatbot and conversational assistant built for clarity, speed, and trust."
        />
        <link rel="canonical" href="https://helloai.app/" />
        <meta property="og:title" content="Hello AI — Your Intelligent Conversational Assistant" />
        <meta
          property="og:description"
          content="Hello AI is a clean, professional AI chatbot and conversational assistant built for clarity, speed, and trust."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://helloai.app/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hello AI — Your Intelligent Conversational Assistant" />
        <meta
          name="twitter:description"
          content="Hello AI is a clean, professional AI chatbot and conversational assistant built for clarity, speed, and trust."
        />
      </Helmet>

      <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16">
        {/* Soft gradient mesh background */}
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          aria-hidden="true"
        >
          {/* Top-left blob */}
          <div
            className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full opacity-30"
            style={{
              background:
                'radial-gradient(circle, hsl(var(--primary) / 0.18) 0%, transparent 70%)',
            }}
          />
          {/* Top-right blob */}
          <div
            className="absolute -top-16 right-0 w-[500px] h-[500px] rounded-full opacity-20"
            style={{
              background:
                'radial-gradient(circle, hsl(var(--secondary) / 0.14) 0%, transparent 70%)',
            }}
          />
          {/* Bottom-center blob */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full opacity-20"
            style={{
              background:
                'radial-gradient(ellipse, hsl(var(--primary) / 0.12) 0%, transparent 70%)',
            }}
          />
        </div>

        {/* Hero content */}
        <section className="flex flex-col items-center text-center px-6 max-w-3xl mx-auto py-xxl">
          <motion.h1
            className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-tight mb-6"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' as const }}
          >
            {home.hero.headline}
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' as const }}
          >
            {home.hero.subtext}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.3, ease: 'easeOut' as const }}
          >
            <Button asChild size="lg" className="px-8 py-6 text-base font-medium rounded-full shadow-md">
              <Link to="/sign-in">{home.hero.cta}</Link>
            </Button>
          </motion.div>
        </section>
      </main>
    </>
  );
}
