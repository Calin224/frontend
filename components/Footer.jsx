import Link from "next/link";
import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import Wrapper from "./Wrapper";

export default function Footer() {
    return (
        <footer className="bg-black text-white py-10">
            <Wrapper className={'flex justify-center flex-col items-center'}>
                <h1 className="text-gray-400 font-bold mb-2">@2023 Box Water</h1>
                <h1 className="text-gray-400">Sandu Calin & Badoi Andrei</h1>
            </Wrapper>
        </footer>
    );
};