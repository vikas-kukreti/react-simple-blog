import authors from './authors'
import blogs from './blogs'
import categories from './categories'

// initial state
const state = {
    authors,
    blogs,
    categories,
    likes: {}
}

const api = {
    state,
    initialize: () => {
      let localData = localStorage.getItem('data');
      try {
        localData = JSON.parse(localData)
        if(localData) {
          state.blogs = [...localData.blogs]
          state.authors = {...localData.authors}
          state.likes = {...localData.likes}
        }
      } catch (e) {
        console.log('No storred data')
      }
    },
    update: (state) => {
      localStorage.setItem('data', JSON.stringify(state))
    }
};

export default api;