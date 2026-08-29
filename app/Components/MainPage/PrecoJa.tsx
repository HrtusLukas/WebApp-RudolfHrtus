import React from "react";
import { Card } from "@heroui/react";
import { FiCheckCircle, FiAward, FiMaximize2 } from "react-icons/fi";

const PrecoJa = () => {
    return (
        <section className="py-16 px-6 max-w-6xl mx-auto flex flex-col items-center border-b border-b-titanium-border">

            <h2 className="font-cinzel text-3xl font-bold text-text-main mb-12 tracking-wide uppercase text-center">
                Prečo Ja
            </h2>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">


                <Card className="bg-btn-dark p-6 rounded-3xl shadow-lg border border-titanium-border/20 flex flex-col items-center text-center">
                    <FiCheckCircle className="text-gold text-4xl mb-4" />
                    <Card.Header className="flex flex-col items-center p-0 mb-2">
                        <Card.Title className="font-cinzel text-xl font-semibold text-white">
                            Precíznosť
                        </Card.Title>
                        <Card.Description className="text-slate-300 text-sm mt-2 leading-relaxed">
                            Dôraz na každý detail, dokonalé 45° kamenorazy (špásky) a absolútne rovný povrch pri každej kachličke.
                        </Card.Description>
                    </Card.Header>
                </Card>

                <Card className="bg-btn-dark p-6 rounded-3xl shadow-lg border border-titanium-border/20 flex flex-col items-center text-center">
                    <FiAward className="text-gold text-4xl mb-4" />
                    <Card.Header className="flex flex-col items-center p-0 mb-2">
                        <Card.Title className="font-cinzel text-xl font-semibold text-white">
                            Odbornosť
                        </Card.Title>
                        <Card.Description className="text-slate-300 text-sm mt-2 leading-relaxed">
                            Roky praxe so stavebnou chémiou, správnou hydroizoláciou a modernými technologickými postupmi.
                        </Card.Description>
                    </Card.Header>
                </Card>

                <Card className="bg-btn-dark p-6 rounded-3xl shadow-lg border border-titanium-border/20 flex flex-col items-center text-center">
                    <FiMaximize2 className="text-gold text-4xl mb-4" />
                    <Card.Header className="flex flex-col items-center p-0 mb-2">
                        <Card.Title className="font-cinzel text-xl font-semibold text-white">
                            Veľkoformáty
                        </Card.Title>
                        <Card.Description className="text-slate-300 text-sm mt-2 leading-relaxed">
                            Špecializácia na pokládku nadrozmerných obkladov a dlažieb s použitím profesionálneho náradia.
                        </Card.Description>
                    </Card.Header>
                </Card>

            </div>
        </section>
    );
};

export default PrecoJa;