import React from 'react'
import { Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="navy-gradient text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div>
            <h4 className="font-semibold mb-4">Product Categories</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gray-300">TORNA</a></li>
              <li><a href="#" className="hover:text-gray-300">SHOURYA</a></li>
              <li><a href="#" className="hover:text-gray-300">ANANT</a></li>
              <li><a href="#" className="hover:text-gray-300">AGRICULTURE DRONE</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Where to Buy</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gray-300">Dealer 1</a></li>
              <li><a href="#" className="hover:text-gray-300">Dealer 2</a></li>
              <li><a href="#" className="hover:text-gray-300">Dealer 3</a></li>
              <li><a href="#" className="hover:text-gray-300">Dealer 4</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Fly Safe</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gray-300">Safety Manual</a></li>
              <li><a href="#" className="hover:text-gray-300">Guidelines</a></li>
              <li><a href="#" className="hover:text-gray-300">Regulations</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gray-300">Expert Blog</a></li>
              <li><a href="#" className="hover:text-gray-300">News</a></li>
              <li><a href="#" className="hover:text-gray-300">Events</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Subscribe Now</h4>
            <p className="text-sm mb-4">Get the latest news from Sarus Aerospace Pvt. Ltd</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 text-black rounded-l-md text-sm"
              />
              <button className="bg-blue-600 px-4 py-2 rounded-r-md hover:bg-blue-700 transition-colors">
                <Mail className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
            <div>
              <h5 className="font-semibold mb-2">Service Plans</h5>
              <p>Drone Maintenance Programs</p>
              <p>Care Refresh Programs</p>
            </div>
            
            <div>
              <h5 className="font-semibold mb-2">Cooperation</h5>
              <p>Become a Authorized Dealer</p>
              <p>Apply for Partnership</p>
            </div>
            
            <div>
              <h5 className="font-semibold mb-2">Support</h5>
              <p>Product Support</p>
              <p>Technical Support and Inquiry</p>
              <p>After Sales Service Policies</p>
            </div>
            
            <div>
              <h5 className="font-semibold mb-2">Community</h5>
              <p>Forum</p>
              <p>Projects</p>
              <p>Developer</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-12 h-12 bg-white rounded flex items-center justify-center mr-4">
                <span className="text-navy font-bold">S</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">SARUS AEROSPACE PVT LTD</h3>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm">Who We Are</span>
              <span className="text-sm">Contact Us</span>
              <span className="text-sm">Careers</span>
              <span className="text-sm">Case Studies</span>
            </div>
          </div>
          
          <div className="text-center mt-8 text-sm text-gray-400">
            <p>Copyright © 2025, Sarus Aerospace All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
