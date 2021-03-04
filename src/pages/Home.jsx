import React from 'react'
import CocktailList from '../components/CocktailList.jsx'
import SearchForm from '../components/SearchForm.jsx'
export default function Home() {
  return (
    <main>
      <SearchForm />
      <CocktailList />
    </main>
  )
}