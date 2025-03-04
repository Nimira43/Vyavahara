import type { Metadata } from 'next'
import { Poppins } from 'next/font/google' 
import './globals.css'
import { ThemeProvider } from '@/context/theme'
import TopNav from '@/components/nav/TopNav'
import { ClerkProvider } from '@clerk/nextjs'
import { BusinessProvider } from '@/context/business'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: 'Vyavahara',
  description: 'Business Directory app using Next JS, Tailwind, TypeScript, Mongo Db and Shadcn',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en' suppressHydrationWarning>
      <body className={poppins.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <BusinessProvider>
            <TopNav />
            {children}   
          </BusinessProvider>
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  )
}
