import "./App.css"
import {useState , useRef} from "react"

const INITIAL_STATE = {
  firstName : "",
  lastName : "",
  email : "",
  contact : "",
  gender : "male",
  subjects : {
    english : true,
    maths : false,
    physics : false
  },
  url : "",
  selectedOption : "",
  about : "",
};

function App() {
  const [formData , setFormData] = useState(INITIAL_STATE)
  const [resume , setResume] = useState(null)
  const fileInputRef = useRef(null)

  
  const handleChange = (e) => {
    const {name , value} = e.target

    setFormData((prev) => ({
      ...prev,
      [name] : value,
    }))
  }

  const handleSubjectChange = (subjectName) => {
    setFormData((prev) => ({
      ...prev,
      subjects : {
        ...prev.subjects,
        [subjectName] : !prev.subjects[subjectName]
      }
    }))
  }

  const handleFileChange = (e) => {
    setResume(e.target.files[0] || null)
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const submissionData = {
      ...formData,
      resume,
    };

    console.log("Submitting Form Data:", submissionData);
  }

  const handleReset = () => {
    setFormData(INITIAL_STATE)
    setResume(null)
    console.log(fileInputRef)
    if(fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  } 

  return(
    <div className="App">
      <h1>Form in React</h1>
      <fieldset>
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name* </label>
          <input 
          type="text"
          name="firstName"
          id="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="Enter First Name"
          required
          />

          <label htmlFor="lastName">Last Name* </label>
          <input 
          type="text"
          name="lastName"
          id="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Enter Last Name"
          required 
          />

          <label htmlFor="email">Enter Email* </label>
          <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email"
          required
          />

          <label htmlFor="contact">Contact*</label>
          <input
          type="tel"
          name="contact"
          id="contact"
          value={formData.contact}
          onChange={handleChange}
          placeholder="Enter Mobile number"
          required
          />

          <label>Gender*</label>
          <div className="radio-group">
            <label htmlFor="male">
              <input 
              type="radio"
              name="gender"
              value="male"
              id="male"
              checked={formData.gender === "male"}
              onChange={handleChange} 
              />
              Male
            </label>
            <label htmlFor="female">
              <input 
              type="radio"
              name="gender"
              value='female'
              id="female" 
              checked={formData.gender === "female"}
              onChange={handleChange}
              />
              Female
            </label>
            <label htmlFor="other">
              <input 
              type="radio"
              name="gender"
              value="other"
              id="other"
              checked={formData.gender === "other"}
              onChange={handleChange} 
              />
              Other
            </label>
          </div>

          <label>Your best Subject</label>
          <div className="checkbox-group">
            <label htmlFor="english">
              <input 
              type="checkbox"
              id="english"
              checked={formData.subjects.english}
              onChange={() => handleSubjectChange("english")} 
              />
              English
            </label>
            <label htmlFor="maths">
              <input 
              type="checkbox"
              id="maths"
              checked={formData.subjects.maths}
              onChange={() => handleSubjectChange("maths")} 
              />
              Maths
            </label>
            <label htmlFor="physics">
              <input 
              type="checkbox"
              id="physics"
              checked={formData.subjects.physics}
              onChange={() => handleSubjectChange("physics")} 
              />
              Physics
            </label>
          </div>

          <label htmlFor="file">Upload Resume*</label>
          <input 
          type="file"
          name="file"
          id="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          required 
          />

          <label htmlFor="url">Enter URL*</label>
          <input 
          type="url"
          name="url"
          id="url"
          value={formData.url}
          onChange={handleChange}
          placeholder="Enter url"
          required 
          />

          <label htmlFor="select">Select your choice</label>
          <select 
          name="selectedOption" 
          id="select"
          value={formData.selectedOption}
          onChange={handleChange}
          >
            <option value="" disabled>
              Select your Ans
            </option>
            <optgroup label="Beginners">
              <option value="1">HTML</option>
              <option value="2">CSS</option>
              <option value="3">JavaScript</option>
            </optgroup>
            <optgroup label="Advance">
              <option value="4">React</option>
              <option value="5">Node</option>
              <option value="6">Express</option>
              <option value="t">MongoDB</option>
            </optgroup>
          </select>

          <label htmlFor="about">About</label>
          <textarea 
          name="about" 
          id="about"
          cols="30"
          rows="20"
          value={formData.about}
          onChange={handleChange}
          placeholder="About your self"
          required
          />

          <div className="form-actions">
            <button type="button" onClick={handleReset} >
              Reset
            </button>
            <button type="submit">
              Submit
            </button>
          </div>

        </form>
      </fieldset>
    </div>
  )
}

export default App
