import { getJobCart } from "../Utilities/fakeDb"

export const productsAndCartData = async () => {
  const jobsData = await fetch('/jobFeatures.json')
  const jobs = await jobsData.json()

  const savedCart = getJobCart()
  const initialCart = []
  for (const id in savedCart) {
    const foundJob = jobs.find(job => job.id === id)
    if (foundJob) {
      const quantity = savedCart[id]
      foundJob.quantity = quantity
      initialCart.push(foundJob)
    }
  }

  return { jobs: jobs, initialCart }
}