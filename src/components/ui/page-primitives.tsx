// src/components/ui/page-primitives.tsx
import React from 'react'
import { Link } from 'react-router-dom'
import { motion, type Variants } from 'framer-motion'
import { Hexagon, ArrowRight, Users, Building2 } from 'lucide-react'

/* ---------- Animation variants (reused across every page) ---------- */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export const staggerParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
}

/* ---------- PageHero : dark hero header with pill + title + subtitle ---------- */
interface PageHeroProps {
  eyebrow?: string
  title: React.ReactNode
  subtitle?: React.ReactNode
  className?: string
}

export const PageHero: React.FC<PageHeroProps> = ({ eyebrow, title, subtitle, className = '' }) => (
  <section className={`relative overflow-hidden bg-hive-night pt-24 pb-16 sm:pt-32 sm:pb-20 md:pt-40 md:pb-28 ${className}`}>
    {/* Ambient glow orbs */}
    <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[20rem] w-[20rem] sm:h-[36rem] sm:w-[36rem] rounded-full bg-gold/10 blur-[120px]" />
    <div className="pointer-events-none absolute top-1/2 -left-16 sm:-left-24 h-48 w-48 sm:h-64 sm:w-64 rounded-full bg-gold-dark/20 blur-[100px]" />
    <div className="pointer-events-none absolute top-1/3 -right-16 sm:-right-24 h-48 w-48 sm:h-72 sm:w-72 rounded-full bg-gold/15 blur-[100px]" />
    {/* Honeycomb overlay */}
    <div className="pointer-events-none absolute inset-0 bg-honeycomb opacity-40" />

    <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        {eyebrow && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gold"
          >
            <Hexagon className="h-3.5 w-3.5 fill-gold text-gold" />
            {eyebrow}
          </motion.div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-base text-white/60 md:text-lg"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  </section>
)

/* ---------- PageSection : consistent section wrapper ---------- */
interface PageSectionProps {
  id?: string
  className?: string
  children: React.ReactNode
  showPattern?: boolean
}

export const PageSection: React.FC<PageSectionProps> = ({
  id,
  className = '',
  children,
  showPattern = true,
}) => (
  <section
    id={id}
    className={`relative overflow-hidden bg-hive-night py-24 sm:py-32 ${className}`}
  >
    {showPattern && <div className="pointer-events-none absolute inset-0 bg-honeycomb opacity-30" />}
    <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-gold/10 blur-[140px]" />
    <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
  </section>
)

/* ---------- SectionHeading : eyebrow + h2 + subtitle ---------- */
interface SectionHeadingProps {
  eyebrow?: string
  title: React.ReactNode
  subtitle?: React.ReactNode
  align?: 'center' | 'left'
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
}) => (
  <div className={`mx-auto max-w-3xl ${align === 'center' ? 'text-center' : 'text-left'}`}>
    {eyebrow && (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gold"
      >
        <Hexagon className="h-3.5 w-3.5 fill-gold text-gold" />
        {eyebrow}
      </motion.div>
    )}
    <motion.h2
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-4 text-base text-white/60 md:text-lg"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
)

/* ---------- FeatureCard : the reusable dark glass card ---------- */
interface FeatureCardProps {
  icon?: React.ComponentType<{ className?: string }>
  iconBadge?: React.ReactNode
  title: React.ReactNode
  description?: React.ReactNode
  children?: React.ReactNode
  index?: number
  className?: string
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  iconBadge,
  title,
  description,
  children,
  index = 0,
  className = '',
}) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
    className={`group relative overflow-hidden rounded-3xl border border-hive-border bg-hive-card/50 p-7 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-glow ${className}`}
  >
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-gold/0 via-gold/0 to-gold/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    <div className="relative">
      {iconBadge
        ? iconBadge
        : Icon && (
            <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 ring-1 ring-gold/30 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
              <Icon className="h-5 w-5 text-gold" />
            </div>
          )}
      <h3 className="mt-5 text-lg font-semibold text-white sm:text-xl">{title}</h3>
      {description && <p className="mt-2 text-sm leading-relaxed text-white/60">{description}</p>}
      {children}
    </div>
    <Hexagon className="pointer-events-none absolute -bottom-3 -right-3 h-16 w-16 text-gold/5 transition-colors duration-300 group-hover:text-gold/15" />
  </motion.div>
)

/* ---------- GoldButton / OutlineButton ---------- */
export const GoldButton: React.FC<
  React.PropsWithChildren<{ to?: string; href?: string; type?: 'button' | 'submit'; className?: string; onClick?: () => void }>
> = ({ to, href, type, children, className = '', onClick }) => {
  const cls =
    'group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gold-gradient px-7 py-3.5 text-sm font-semibold text-hive-night shadow-honey transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow-lg ' +
    className
  const inner = (
    <>
      <span className="absolute inset-0 bg-honeycomb-dense opacity-20" />
      <span className="relative">{children}</span>
      <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </>
  )
  if (to) return <Link to={to} className={cls}>{inner}</Link>
  if (href) return <a href={href} className={cls}>{inner}</a>
  return (
    <button type={type || 'button'} onClick={onClick} className={cls}>
      {inner}
    </button>
  )
}

export const OutlineButton: React.FC<
  React.PropsWithChildren<{ to?: string; href?: string; className?: string }>
> = ({ to, href, children, className = '' }) => {
  const cls =
    'group relative inline-flex items-center justify-center gap-2 rounded-full border-2 border-gold/60 bg-hive-night/60 px-7 py-3.5 text-sm font-semibold text-gold backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:bg-hive-night hover:shadow-glow ' +
    className
  const inner = (
    <>
      <span className="relative">{children}</span>
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </>
  )
  if (to) return <Link to={to} className={cls}>{inner}</Link>
  if (href) return <a href={href} className={cls}>{inner}</a>
  return <button className={cls}>{inner}</button>
}

/* ---------- CTASection : bottom dual-button CTA ---------- */
export const CTASection: React.FC<{
  title?: React.ReactNode
  subtitle?: React.ReactNode
}> = ({
  title = (
    <>
      Ready to join the <span className="text-gold-gradient">hive?</span>
    </>
  ),
  subtitle = 'Whether you want to find flexible work or deploy a trained crew, the colony is waiting.',
}) => (
  <section className="relative overflow-hidden bg-hive-night py-24 sm:py-32">
    <div className="pointer-events-none absolute inset-0 bg-honeycomb opacity-30" />
    <div className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[140px]" />

    <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-4xl overflow-hidden rounded-2xl sm:rounded-3xl border border-hive-border bg-hive-card/60 p-6 text-center backdrop-blur sm:p-10 md:p-14"
      >
        <div className="pointer-events-none absolute inset-0 bg-honeycomb-dense opacity-20" />
        <div className="relative">
          <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/60 md:text-lg">{subtitle}</p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <GoldButton to="/join-hive">
              <Users className="h-4 w-4" /> Join Your Hive
            </GoldButton>
            <OutlineButton to="/build-hive">
              <Building2 className="h-4 w-4" /> Build Your Hive
            </OutlineButton>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
)
