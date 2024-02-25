export async function getStaticPaths() {
  try {
    // Fetch data from your API to get the dynamic paths
    const response = await axios.get('http://localhost:4000/api/v1/products')
    const products = response.data

    // Map products to an array of paths
    const paths = products.map((product) => ({
      params: { slug: product.id.toString() },
    }))

    return { paths, fallback: false }
  } catch (error) {
    console.error('Error fetching data:', error)
    return { paths: [], fallback: false }
  }
}

// Fungsi ini digunakan untuk mendapatkan data untuk setiap jalur.
export async function getStaticProps({ params }) {
  try {
    // Fetch data based on the slug
    const response = await axios.get(
      `http://localhost:4000/api/v1/products/${params.slug}`
    )
    const product = response.data

    return {
      props: { product },
    }
  } catch (error) {
    console.error('Error fetching data:', error)
    return {
      props: { product: {} },
    }
  }
}
