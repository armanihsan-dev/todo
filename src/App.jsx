import React from 'react';
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';
import Header from './../components/Header';
import Footer from '../components/Footer';

const App = () => {
  return (
    <section className="font-[Poppins]  px-6 py-4 h-screen flex flex-col justify-between">
      <main>
        <Header />
        <TodoInput />
        <TodoList />
      </main>
      <Footer />
    </section>
  );
};

export default App;
