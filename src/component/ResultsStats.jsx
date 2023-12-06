import React from 'react'

const ResultsStats = () => {
  return (
    <div className="px-4 mx-auto lg:pt-16 lg:flex-row md:px-8" style={{margin: 0}}>
      <div className="color-gray">
      <h2 className="font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none" style={{marginBottom: "20px"}}>
      Results & Statistics
        </h2>
      <iframe src="https://iframes.leagues.tennis.com.au/3599/league_20498.html" width="100%" height="600px" frameBorder="0"></iframe>
      </div>
    </div>
  )
}

export default ResultsStats