import React from 'react';
import './Home.css';

export default function ClientReviews() {
    return (
        <div id="reviews" class="pt-10 md:pt-16 px-2 md:px-5 lg:px-12">
            <div class="w-full rounded-xl md:pt-10 md:pb-16">
                <div class="text-center pt-8">
                    <div class="flex flex-row gap-2 items-center justify-center mb-5">
                        <div class="flex justify-center">
                            <img src={require("../../assets/1star.webp")} alt="Five Stars" style={{ height: "2rem" }} />
                        </div>
                        <div>
                            <p class="text-3xl font-bold" style={{color:'#00B67A'}}>4.9</p>
                        </div>
                        <div>
                            <p class="sub-title font-bold text-3xl text-gray-600">(93 CLIENTS)</p>
                        </div>
                    </div>
                    <h1 class="header-title text-center text-2xl md:text-5xl mb-4">CLIENT FEEDBACK REVIEWS</h1>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10 px-2 md:px-8">

                    <div class="bg-white rounded-lg shadow-lg border overflow-hidden">
                        <div class="bg-white p-2 rounded-lg shadow-lg">
                            <div class="flex items-start">
                                <div>
                                    <img class="w-12 h-12 rounded-full mr-3" src={require("../../assets/pf1.webp")}
                                        alt="Reviewer Profile" />
                                </div>
                                <div class="flex flex-col">
                                    <div class="flex flex-row items-center gap-2">
                                        <p style={{ color: "#28705F" }} class="text-lg font-bold">Markus R</p>
                                        <p class="text-sm text-gray-600">(Website & App)</p>
                                    </div>
                                    <div>
                                        <p class="text-sm text-gray-600 font-bold">grocery store owner in USA</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="px-2" style={{ backgroundColor: "#F6F6F6" }}>
                            <div class="flex items-center justify-start mb-4 flex-col">
                                <p class="font-semibold my-2">EXCELLENT (5.0)</p>
                                <img class="mr-2" src={require("../../assets/5star.webp")} alt="Star Icon" style={{ height: "1.3rem" }} />
                            </div>

                            <div class="mb-4 text-sm md:px-2 font-semibold">
                                <p>Amit has done an excellent job developing websites. I've had two different websites
                                    created for my business, and he never disappoints. His skills are impressive, and
                                    it's truly a pleasure to work with your brother.</p>
                            </div>

                            <div class="screen relative">
                                <img class="main-image w-full rounded-md" src={require("../../assets/screen1.webp")} alt="Client Work Screenshot" />
                                <div class="flex md:hidden gif-overlay absolute bottom-2 right-2" style={{ bottom: 0, right: 0 }}>
                                    <img src={require("../../assets/demoGif.gif")} alt="Hover GIF" class="w-10 h-10" style={{ width: "64px", height: "64px" }} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white rounded-lg shadow-lg border overflow-hidden">
                        <div class="bg-white p-2 rounded-lg shadow-lg">
                            <div class="flex items-start">
                                <div>
                                    <img class="w-12 h-12 rounded-full mr-3" src={require("../../assets/pf6.webp")}
                                        alt="Reviewer Profile" />
                                </div>
                                <div class="flex flex-col">
                                    <div class="flex flex-row items-center gap-2">
                                        <p style={{ color: "#28705F" }} class="text-lg font-bold">Ashu agarwal</p>
                                        <p class="text-sm text-gray-600">(Website)</p>
                                    </div>
                                    <div>
                                        <p class="text-md text-gray-600 font-bold">Tanibestro (Co-Founder)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="px-2" style={{ backgroundColor: "#F6F6F6" }}>
                            <div class="flex items-center justify-start mb-4 flex-col">
                                <p class="font-semibold my-2">EXCELLENT (5.0)</p>
                                <img class="mr-2" src={require("../../assets/5star.webp")} alt="Star Icon" style={{ height: "1.3rem" }} />
                            </div>

                            <div class="mb-4 text-sm md:px-2 font-semibold">
                                <p>Amit has done an excellent job developing websites. I’ve had two different websites
                                    created for my business, and he never disappoints. His skills are impressive, and
                                    It’s truly a pleasure to work with you brother.</p>
                            </div>

                            <div class="screen relative">
                                <img class="main-image w-full rounded-md" src={require("../../assets/screen2.webp")} alt="Client Work Screenshot" />
                                <div class="flex md:hidden gif-overlay absolute bottom-2 right-2" style={{ bottom: 0, right: 0 }}>
                                    <img src={require("../../assets/demoGif.gif")} alt="Hover GIF" class="w-10 h-10" style={{ width: "64px", height: "64px" }} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white rounded-lg shadow-lg border overflow-hidden">
                        <div class="bg-white p-2 rounded-lg shadow-lg">
                            <div class="flex items-start">
                                <div>
                                    <img class="w-12 h-12 rounded-full mr-3" src={require("../../assets/pf2.webp")}
                                        alt="Reviewer Profile" />
                                </div>
                                <div class="flex flex-col">
                                    <div class="flex flex-row items-center gap-2">
                                        <p style={{ color: "#28705F" }} class="text-lg font-bold">Darshan Cheeta</p>
                                        <p class="text-sm text-gray-600">(Website)</p>
                                    </div>
                                    <div>
                                        <p class="text-sm text-gray-600 font-bold">DMDENT Enterprice (CEO And Founder)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="px-2" style={{ backgroundColor: "#F6F6F6" }}>
                            <div class="flex items-center justify-start mb-4 flex-col">
                                <p class="font-semibold my-2">EXCELLENT (5.0)</p>
                                <img class="mr-2" src={require("../../assets/5star.webp")} alt="Star Icon" style={{ height: "1.3rem" }} />
                            </div>

                            <div class="mb-4 text-sm md:px-2 font-semibold">
                                <p>I meet him on Fiverr, They always do fantastic work all time never disappoint me,
                                    highly recommend to work with this team, know what's the best and understand how to
                                    achieve in e-commerce websites!</p>
                            </div>

                            <div class="screen relative">
                                <img class="main-image w-full rounded-md" src={require("../../assets/screen3.webp")} alt="Client Work Screenshot" />
                                <div class="flex md:hidden gif-overlay absolute bottom-2 right-2" style={{ bottom: 0, right: 0 }}>
                                    <img src={require("../../assets/demoGif.gif")} alt="Hover GIF" class="w-10 h-10" style={{ width: "64px", height: "64px" }} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white rounded-lg shadow-lg border overflow-hidden">
                        <div class="bg-white p-2 rounded-lg shadow-lg">
                            <div class="flex items-start">
                                <div>
                                    <img class="w-12 h-12 rounded-full mr-3" src={require("../../assets/pf3.webp")}
                                        alt="Reviewer Profile" />
                                </div>
                                <div class="flex flex-col">
                                    <div class="flex flex-row items-center gap-2">
                                        <p style={{ color: "#28705F" }} class="text-lg font-bold">Martínez Daniel</p>
                                        <p class="text-sm text-gray-600">(Website)</p>
                                    </div>
                                    <div>
                                        <p class="text-sm text-gray-600 font-bold">Powerland owner & CEO (Mexico)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="px-2" style={{ backgroundColor: "#F6F6F6" }}>
                            <div class="flex items-center justify-start mb-4 flex-col">
                                <p class="font-semibold my-2">GRREAT (4.0)</p>
                                <img class="mr-2" src={require("../../assets/4star.webp")} alt="Star Icon" style={{ height: "1.3rem" }} />
                            </div>

                            <div class="mb-4 text-sm md:px-2 font-semibold">
                                <p>Tryzen team done an excellent job developing websites. but there is little bit miss
                                    communication in language overall very good experience to working with you my
                                    friend.</p>
                            </div>

                            <div class="screen relative">
                                <img class="main-image w-full rounded-md" src={require("../../assets/screen4.webp")} alt="Client Work Screenshot" />
                                <div class="flex md:hidden gif-overlay absolute bottom-2 right-2" style={{ bottom: 0, right: 0 }}>
                                    <img src={require("../../assets/demoGif.gif")} alt="Hover GIF" class="w-10 h-10" style={{ width: "64px", height: "64px" }} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white rounded-lg shadow-lg border overflow-hidden">
                        <div class="bg-white p-2 rounded-lg shadow-lg">
                            <div class="flex items-start">
                                <div>
                                    <img class="w-12 h-12 rounded-full mr-3" src={require("../../assets/pf4.webp")}
                                        alt="Reviewer Profile" />
                                </div>
                                <div class="flex flex-col">
                                    <div class="flex flex-row items-center gap-2">
                                        <p style={{ color: "#28705F" }} class="text-lg font-bold">Ramin Aslan</p>
                                        <p class="text-sm text-gray-600">(Website)</p>
                                    </div>
                                    <div>
                                        <p class="text-sm text-gray-600 font-bold">The Perfect Playtime (CEO And Founder)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="px-2" style={{ backgroundColor: "#F6F6F6" }}>
                            <div class="flex items-center justify-start mb-4 flex-col">
                                <p class="font-semibold my-2">EXCELLENT (5.0)</p>
                                <img class="mr-2" src={require("../../assets/5star.webp")} alt="Star Icon" style={{ height: "1.3rem" }} />
                            </div>

                            <div class="mb-4 text-sm md:px-2 font-semibold">
                                <p>Our website redesign project with TryzenSolution was a huge success. The team took
                                    the time to understand our needs and delivered a beautiful result. Thank you guys...
                                </p>
                            </div>

                            <div class="screen relative">
                                <img class="main-image w-full rounded-md" src={require("../../assets/screen5.webp")} alt="Client Work Screenshot" />
                                <div class="flex md:hidden gif-overlay absolute bottom-2 right-2" style={{ bottom: 0, right: 0 }}>
                                    <img src={require("../../assets/demoGif.gif")} alt="Hover GIF" class="w-10 h-10" style={{ width: "64px", height: "64px" }} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white rounded-lg shadow-lg border overflow-hidden">
                        <div class="bg-white p-2 rounded-lg shadow-lg">
                            <div class="flex items-start">
                                <div>
                                    <img class="w-12 h-12 rounded-full mr-3" src={require("../../assets/pf5.webp")}
                                        alt="Reviewer Profile" />
                                </div>
                                <div class="flex flex-col">
                                    <div class="flex flex-row items-center gap-2">
                                        <p style={{ color: "#28705F" }} class="text-lg font-bold">
                                            Santiago Lozzano
                                        </p>
                                        <p class="text-sm text-gray-600">(Website)</p>
                                    </div>
                                    <div>
                                        <p class="text-sm text-gray-600 font-bold">KnockKnock (Founder,Mexico)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="px-2" style={{ backgroundColor: "#F6F6F6" }}>
                            <div class="flex items-center justify-start mb-4 flex-col">
                                <p class="font-semibold my-2">EXCELLENT (5.0)</p>
                                <img class="mr-2" src={require("../../assets/5star.webp")} alt="Star Icon" style={{ height: "1.3rem" }} />
                            </div>

                            <div class="mb-4 text-sm md:px-2 font-semibold">
                                <p>We had a great experience working with TryzenSolution! They were attentive and
                                    professional, provided amazing service and created an app</p>
                            </div>

                            <div class="screen relative">
                                <img class="main-image w-full rounded-md" src={require("../../assets/screen6.webp")} alt="Client Work Screenshot" />
                                <div class="flex md:hidden gif-overlay absolute bottom-2 right-2" style={{ bottom: 0, right: 0 }}>
                                    <img src={require("../../assets/demoGif.gif")} alt="Hover GIF" class="w-10 h-10" style={{ width: "64px", height: "64px" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
