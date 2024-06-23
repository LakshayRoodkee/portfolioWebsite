'use client'
 
export default function myImageLoader({ src, width, quality }) {
  return `https://LakshayRoodkee-porfolio.com/${src}?w=${width}&q=${quality || 75}`
}