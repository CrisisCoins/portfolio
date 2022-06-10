import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#41495c]">
          Skills
        </p>
        <h2 className="py-4">Learned Technologies</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 pt-4">
          <div className="p-6 pt shadow-md shadow-[#34393f]/40 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                    src="/html.png"
                    width={64}
                    height={64}
                    alt="HTML Logo"
                  />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-md shadow-[#34393f]/40 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
              <Image
                    src="/css.png"
                    width={64}
                    height={64}
                    alt="CSS Logo"
                  />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-md shadow-[#34393f]/40 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
              <Image
                    src="/javascript.png"
                    width={64}
                    height={64}
                    alt="JavaScript Logo"
                  />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-md shadow-[#34393f]/40 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
              <Image
                    src="/tailwind.png"
                    width={64}
                    height={64}
                    alt="Tailwind Logo"
                  />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-md shadow-[#34393f]/40 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
              <Image
                    src="/react.png"
                    width={64}
                    height={64}
                    alt="ReactJS Logo"
                  />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>ReactJS</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-md shadow-[#34393f]/40 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
              <Image
                    src="/next.png"
                    width={64}
                    height={64}
                    alt="NextJS Logo"
                  />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>NextJS</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-md shadow-[#34393f]/40 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
              <Image
                    src="/nextauth.png"
                    width={64}
                    height={64}
                    alt="NextAuthJS Logo"
                  />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Next-AuthJS</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-md shadow-[#34393f]/40 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
              <Image
                    src="/github1.png"
                    width={64}
                    height={64}
                    alt="Github Logo"
                  />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Github</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-md shadow-[#34393f]/40 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
              <Image
                    src="/java.png"
                    width={64}
                    height={64}
                    alt="Java Logo"
                  />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Java</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-md shadow-[#34393f]/40  rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
              <Image
                    src="/sql.png"
                    width={64}
                    height={64}
                    alt="SQL Logo"
                  />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>SQL</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-md shadow-[#34393f]/40  rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
              <Image
                    src="/firebase.png"
                    width={64}
                    height={64}
                    alt="Firebase Logo"
                  />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Firebase</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-md shadow-[#34393f]/40  rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
              <Image
                    src="/mongo.png"
                    width={64}
                    height={64}
                    alt="MongoDB Logo"
                  />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>MongoDB</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-md shadow-[#34393f]/40  rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
              <Image
                    src="/blockchain.png"
                    width={64}
                    height={64}
                    alt="Blockchain Logo"
                  />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Blockchain</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-md shadow-[#34393f]/40  rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
              <Image
                    src="/solidity.png"
                    width={64}
                    height={64}
                    alt="Solidity Logo"
                  />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Solidity</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-md shadow-[#34393f]/40  rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
              <Image
                    src="/node.png"
                    width={64}
                    height={64}
                    alt="NodeJS Logo"
                  />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>NodeJS</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-md shadow-[#34393f]/40  rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
              <Image
                    src="/web3.png"
                    width={64}
                    height={64}
                    alt="Web3JS Logo"
                  />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Web3JS</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-md shadow-[#34393f]/40  rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
              <Image
                    src="/truffle.png"
                    width={64}
                    height={64}
                    alt="TruffleSuite Logo"
                  />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Truffle Suite</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-md shadow-[#34393f]/40  rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
              <Image
                    src="/token.png"
                    width={64}
                    height={64}
                    alt="ERC-20 Token Logo"
                  />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Cryptocurrency</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-md shadow-[#34393f]/40  rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
              <Image
                    src="/rest.png"
                    width={64}
                    height={64}
                    alt="REST Api Logo"
                  />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>REST Api</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-md shadow-[#34393f]/40  rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
              <Image
                    src="/springboot.png"
                    width={64}
                    height={64}
                    alt="SpringBoot Logo"
                  />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>SpringBoot</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
