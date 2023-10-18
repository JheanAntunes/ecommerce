import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'
import Footer_Section_Rede_Social from './Footer_Section_Rede_Social'

function Footer_Section_Rede_Social_Wrapper() {
    return (
        <div className="flex flex-wrap gap-5">
            <Footer_Section_Rede_Social className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                <Instagram className="text-slate-50" />
            </Footer_Section_Rede_Social>
            <Footer_Section_Rede_Social className="bg-red-600">
                <Youtube className="text-slate-50" />
            </Footer_Section_Rede_Social>
            <Footer_Section_Rede_Social className="bg-gradient-to-r from-blue-500 to-blue-600">
                <Twitter className="text-slate-50" />
            </Footer_Section_Rede_Social>
            <Footer_Section_Rede_Social className="bg-gradient-to-r from-sky-400 to-blue-500">
                <Linkedin className="text-slate-50" />
            </Footer_Section_Rede_Social>
            <Footer_Section_Rede_Social className="bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900">
                <Facebook className="text-slate-50" />
            </Footer_Section_Rede_Social>
        </div>
    )
}

export default Footer_Section_Rede_Social_Wrapper
