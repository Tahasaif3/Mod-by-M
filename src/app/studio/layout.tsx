// src/app/layout.tsx


export const metadata = {
  title: "Hekto",
  description: "Hekto Eccommerce Website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
 
      <html lang="en">
        <body>
         
          {children} 
          
          
          
        </body>
      </html>
    
  );
}
