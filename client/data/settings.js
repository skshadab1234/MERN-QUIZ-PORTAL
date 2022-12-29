const settings = async () => {
      try {
        const response = await fetch("/settings", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            }
        })

        const getSettings = await response.json()
        
        return getSettings
      } catch (error) {
        console.log(error)
      }
}

export default settings