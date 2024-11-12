import React from 'react';

const Header = () => {
  return (
    <header className="text-white font-semibold">
      <h1 className="bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] p-4 text-3xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
        Poo Poo.io
      </h1>
    </header>
  );
};

export default Header;