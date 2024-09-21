import { defineStore } from 'pinia'
import axios from 'axios'
import Swal from 'sweetalert2'

export const usePlacesStore = defineStore('places', {
  state: () => ({
    lists: [],
    place: [],
    loading: true,
    error: null,
    searchPlace: undefined as string | undefined
  }),

  actions: {
    async getPlaces() {
      this.loading = true
      this.error = null

      if (!this.searchPlace || this.searchPlace === '') {
        this.searchPlace = undefined
      }

      await axios
        .get('http://bizmates-exam.test:8080/api/get-places', {
          params: {
            search: this.searchPlace
          }
        })
        .then((response) => {
          this.lists = response.data
          this.loading = false
        })
        .catch((error) => {
          Swal.fire({
            title: 'Something went wrong...',
            text: error.response.data.error
          })
          this.loading = false
          this.lists = []
        })
    },

    async getPlaceInfo(id: string) {
      this.loading = true

      await axios
        .get(`http://bizmates-exam.test:8080/api/get-places/${id}`)
        .then((response) => {
          this.place = response.data
          this.loading = false
        })
        .catch((error) => {
          Swal.fire({
            title: 'Something went wrong...',
            text: error.response.data.error
          })
          this.loading = false
          this.place = []
        })
    }
  },

  getters: {
    getPlace: (state) => state.place
  }
})
