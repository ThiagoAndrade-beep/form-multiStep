import './App.css'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import UserForm from './components/UserForm'
import Review from './components/Review'
import Thanks from './components/Thanks'
import { useForm } from './hooks/useForm'
import { Steps } from './components/Steps'
import { useState } from 'react'
import { FiSend } from 'react-icons/fi'

type FormFields = {
  name: string;
  email: string;
  review: string;
  comments: string;
}

const formTemplate: FormFields = {
  name: '',
  email: '',
  review: '',
  comments: ''
}

function App() {
  const [data, setData] = useState(formTemplate)

  const updateFieldHandler = (key: string, value: string) => {
    setData(prev => {
      return {
        ...prev,
        [key]: value
      }
    })
  }

  const formComponents = [
    <UserForm data={data} updateFielHandler={updateFieldHandler} />,
    <Review data={data} updateFielHandler={updateFieldHandler} />,
    <Thanks data={data}/>
  ]

  const { currentStep, currentComponent, changeStep, isLatestStep } = useForm(formComponents)

  return (
    <>
      <div className='app'>
        <div className='header'>
          <h2>Deixe sua avaliação</h2>
          <p>Ficamos felizes com a sua compra! Por favor, deixe sua avaliação.</p>
        </div>

        <div className='form-container'>
          <Steps currentStep={currentStep} />
          <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
            <div className='inputs-container'>
              {currentComponent}
            </div>
            <div className='actions'>
              <button type='button' onClick={() => changeStep(currentStep - 1)}>
                <GrFormPrevious />
                <span>Voltar</span>
              </button>
              {!isLatestStep ? (
                <button type='submit'>
                  <GrFormNext />
                  <span>Próximo</span>
                </button>
              ) : (
                <button type='button'>
                  <FiSend />
                  <span>Enviar</span>
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
