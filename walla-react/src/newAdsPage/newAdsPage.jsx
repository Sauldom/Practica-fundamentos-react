import { useEffect, useState } from "react";
import Layout from "../adsPage/componentes/layout/Layout";
import { createAd, getTags } from "../service/service.jsx";
import { useNavigate } from "react-router-dom";

function NewAdsPage() {
  const [formData, setFormData] = useState({
    name: "",
    sale: false,
    tags: [],
    price: 0,
    //photo: null,
  });
  const [tags, setTags] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getTags().then((tag) => {
      setTags(tag);
    });
  }, []);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const newValue = name === "price" ? parseFloat(value) : String(value);
    setFormData({ ...formData, [name]: newValue });
  };
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;

    setFormData({ ...formData, [name]: checked });
  };
  const handleTagsChange = (event) => {
    const { options } = event.target;
    const selectedTags = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedTags.push(options[i].value);
      }
    }
    setFormData({ ...formData, tags: selectedTags });
  };
  const handleSubmit = async (event) => {
    console.log(formData);
    event.preventDefault();
    try {
      const createdAd = await createAd(formData);
      navigate(`/adverts/${createdAd.id}`);
    } catch (error) {
      if (error.staus === 401) {
        navigate("/");
      }
    }
  };

  return (
    <Layout>
      <h1>Crea tu anuncio</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="sale"
              checked={formData.sale}
              onChange={handleCheckboxChange}
            />
            Marca para poner en venta
          </label>
        </div>
        <div>
          <label htmlFor="tags">Tags:</label>
          <select
            multiple
            id="tags"
            name="tags"
            value={formData.tags}
            onChange={handleTagsChange}
          >
            {tags.map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="price">Precio:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            step="any"
            required
          />
        </div>
        <div>
          <label htmlFor="photo">Foto:</label>
          <input
            type="file"
            id="photo"
            name="photo"
            accept="image/*"
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Crear Anuncio</button>
      </form>
    </Layout>
  );
}

export default NewAdsPage;
