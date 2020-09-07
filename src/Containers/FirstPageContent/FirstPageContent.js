import React, { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core'
import MediaCard from '../../Components/MediaCard/MediaCard'
import Spinner from '../../Components/UI/Spinner/Spinner'

export default function FirstPageContent () {
  const [banner, setBanner] = useState()
  const [topMovies, setTopMovies] = useState()
  const [content, setContent] = useState()
  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    fetch('http://apitest.tek-nic.com/movie/FirstPage')
			.then(res => res.json())
			.then(res => {
  if (res.status === 1) {
    setBanner(res.result[0].list[0])
    setTopMovies(res.result[1].list)
    setContent(res.result[2].list)
  } else {
    setError(res.message)
  }
})
  }, [])

  return (
    <Grid
      container
      style={{ marginTop: '10px' }}
      xs={12}
      spacing={3}
      justify='center'
		>
      {banner
				? <MediaCard
  size={12}
  title={banner.Title}
  image={banner.ThumbImage}
  summary={banner.Summary}
  height={480}
					/>
				: <Spinner />}
      {topMovies &&
				topMovies.map(item =>
  <MediaCard
    size={6}
    title={item.Title}
    image={item.ThumbImage}
    summary={item.Summary}
    height={240}
					/>
				)}
      {content &&
				content.map(item =>
  <MediaCard
    size={3}
    title={item.Title}
    image={item.PortraitImage}
    summary={item.Summary}
    height={300}
					/>
				)}
    </Grid>
  )
}
