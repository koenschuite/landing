"use client"
import Lottie from "lottie-react"
import Link from "next/link"
import securityAnimation from "./animation/security.json"
import sharingAnimation from "./animation/sharing.json"
import storageAnimation from "./animation/storage.json"
const items = [
 
    {
        title: "Secure Data Collection",
        description: `We offer several methods of securely collect data from different platforms. 
        See what data is collected by different platforms and onboard all the data you want to our platform.`,
        image: securityAnimation,
        href: "/data-collection",
        color: "green"
    },
    {
        title: "Secure Data Storage",
        description: `We offer secure storage for everyone with the compliance to all the best settings possible.
            We encrypt the data before it is stored, this way we can ensure that your data is safe and secure.
        `,
        image: storageAnimation,
        href: "#",
        color: "blue"
    },
    {
        title: "Secure Data Sharing",
        description: `With our special solution, you are able to give access to your data based on your own conditions.
        We want to make sure that you understand where you data is used and how it can be used. `,
        image: sharingAnimation,
        href: "#",
        color: "yellow"
    }
    
]

export default function DataFeatures() {
  return (
    <main className="grid grid-cols-3">
        {items.map((item:any, key:number) => (
            <DataFeature key={key} item={item} />
        ))}
    
    </main>
  )
}

export function DataFeature({item}: {item: any}) {
    
    let bg = 'hover:bg-green-800'
    if(item.color === 'yellow') {
        bg = `hover:bg-yellow-800`
    }
    if(item.color === 'blue') {
        bg = `hover:bg-blue-800`
    }
    return (
        <main className={`px-24 py-8 border ${bg} hover:bg-opacity-20 border-0.5 border-l-0 border-gray-400`}>
            <h1 className="tracking-wider text-2xl font-light text-center">{item.title}</h1>
            <div className="tracking-widest font-light text-sm text-gray-300 intent-2 my-8">
                {item.description}
            </div>
            <div>
                
            <Lottie 
                animationData={item.image}
                style={{height: 300}}
            />
            </div>
            <Link href={item.href}
                className="text-center font-light tracking-wider pb-2 border-b border-blue-400 hover:border-blue-100 mt-8"
            >
                READ MORE
            </Link>

        </main>
    )
}