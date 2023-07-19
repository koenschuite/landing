"use client"
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'
import Link from 'next/link'
import { Fragment } from 'react'



import { PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { Logo } from './logo'


import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from '@heroicons/react/24/outline'
import { Button } from '../button/button'
import FlyOut from './flyout'
import { NavLink } from './nav-link'

const values = [
  { name: 'Our values', description: 'Get a better understanding of your traffic', href: '/outdoor', icon: ChartPieIcon },
  { name: 'Roadmap', description: 'See our growth path and interact', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Privacy', description: "Work together without losing privacy", href: '#', icon: FingerPrintIcon },
  { name: 'Be involved', description: "Help us grow and build the future", href: '#', icon: SquaresPlusIcon },
  { name: 'Contact', description: "Your customers' data will be safe and secure", href: '#', icon: PhoneIcon },
]
const valuesAction = [
  { name: 'Watch demo', href: '#', icon: 'PlayCircleIcon' },
  { name: 'Contact sales', href: '#', icon: 'PhoneIcon' },
]

const solutions = [
  { name: 'Data Management', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Data Computate', description: 'Compute over your data with full control', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Privacy', description: "Work together without losing privacy", href: '/data-control', icon: FingerPrintIcon },
  { name: 'Better Insights', description: 'Gain better transparent insighst in your data ', href: '#', icon: SquaresPlusIcon },
  { name: 'Engagement', description: 'Engagement in new ways with your community and employees', href: '#', icon: ArrowPathIcon },
]
const solutionsAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]



function MobileNavLink({ href, children } : { href: string, children: React.ReactNode }) {
  return (
    <Popover.Button as={Link} href={href} className="block w-full p-2">
      {children}
    </Popover.Button>
  )
}

function MobileNavIcon({ open }: { open: boolean}) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          'origin-center transition',
          open && 'scale-90 opacity-0'
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          'origin-center transition',
          !open && 'scale-90 opacity-0'
        )}
      />
    </svg>
  )
}

function MobileNavigation() {
  return (
    <Popover>
      <Popover.Button
        className="relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            as="div"
            className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
          >
            <MobileNavLink href="#solutions">Solutions</MobileNavLink>
            <MobileNavLink href="/outdoor">Billboards</MobileNavLink>
            <MobileNavLink href="/campaign">Campaign</MobileNavLink>
            <MobileNavLink href="/data-control">Data Control</MobileNavLink>
            <MobileNavLink href="#faq">FAQ</MobileNavLink>
            <hr className="m-2 border-slate-300/40" />
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}

export function Header() {
  return (
    <header className="py-5 bg-white">
    
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link href="/" aria-label="Home">
              <Logo className="h-14 w-auto" />
            </Link>
            <div className="hidden md:flex md:gap-x-12">
              <FlyOut name="Solutions" items={solutions} actions={solutionsAction} />
              <FlyOut name="Values"  items={values} actions={valuesAction} />
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <div className="hidden md:block">
              <NavLink href="https://billboards.connect-fast.com/account/login">Sign in</NavLink>
            </div>
            <Button href="https://billboards.connect-fast.com/account/signup" className="bg-cf-500">
              <span>
                Get started <span className="hidden lg:inline">today</span>
              </span>
            </Button>
            <div className="-mr-1 md:hidden">
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
