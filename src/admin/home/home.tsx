import { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import privilegeCheckFn from "../../lib/user/privilegeCheck";
import { Link, useNavigate } from "react-router-dom";
import {
  AncestriesCreatePost,
  CreatePost,
} from "../../typesAndInterfaces/createPost";
import createPostFn from "../../lib/posts/createPost";
import styles from "../styles/formKF3.module.css";
import Cookies from "js-cookie";
import createAncestryPostFn from "../../lib/ancestries/addPost";

export const AdminHome = () => {
  const [formData, setFormData] = useState<CreatePost>({
    name: "",
    sub_heading: "",
    year: "",
    picture: "",
    tag: "winners",
  });
  const [post, setPost] = useState("");

  const [formData1, setFormData1] = useState<AncestriesCreatePost>({
    post_heading: "",
    post_sub_heading: "",
    age: "",
    sex: "",
    email: "",
    address: "",
    state: "",
    nationality: "",
    date_year: "",
    ancestries_posts_imgs: "",
  });
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    !Cookies.get("token") && navigate("/");
    try {
      privilegeCheckFn()
        .then((data) => {
          if (!data.message.includes("success")) {
            navigate("/");
          }
        })
        .catch((error) => {
          navigate("/");
        });
    } catch (error) {
      navigate("/");
    }
  });

  function handleChange(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value, type } = event.target;

    if (type === "file") {
      const fileList = (event.target as HTMLInputElement).files;
      if (fileList) {
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: fileList,
        }));
      }
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formDataBody = new FormData();
    for (const key in formData) {
      if (key === "picture") {
        const value = formData[key];
        if (value instanceof FileList) {
          const fileList = value as FileList;
          for (let i = 0; i < fileList.length; i++) {
            formDataBody.append(key, fileList[i]);
          }
        } else if (typeof value === "string") {
          formDataBody.append(key, value);
        }
      } else {
        formDataBody.append(key, String(formData[key]));
      }
    }

    formDataBody.append("post", post);
    try {
      await createPostFn(formDataBody);

      // reset the form
      setFormData({
        name: "",
        sub_heading: "",
        post: "",
        year: "",
        picture: "",
        tag: "winners",
      });
    } catch (error) {
      console.error(error);
    }
  }

  function handleChange1(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value, type } = event.target;
    console.log({ name, value, type });

    if (type === "file") {
      const fileList = (event.target as HTMLInputElement).files;
      if (fileList) {
        setFormData1((prevFormData) => ({
          ...prevFormData,
          [name]: fileList,
        }));
      }
    } else {
      setFormData1((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  }

  async function handleAncestriesSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    const formDataBody = new FormData();
    for (const key in formData1) {
      if (key === "ancestries_posts_imgs") {
        const value = formData1[key];
        if (value instanceof FileList) {
          const fileList = value as FileList;
          for (let i = 0; i < fileList.length; i++) {
            formDataBody.append(key, fileList[i]);
          }
        } else if (typeof value === "string") {
          formDataBody.append(key, value);
        }
      } else {
        formDataBody.append(key, String(formData1[key]));
      }
    }

    formDataBody.append("content", content);
    try {
      await createAncestryPostFn(formDataBody);

      // reset the form
      setFormData1({
        post_heading: "",
        post_sub_heading: "",
        age: "",
        sex: "",
        email: "",
        address: "",
        state: "",
        nationality: "",
        date_year: "",
        ancestries_posts_imgs: "",
      });
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className={styles.containerKF3}
      >
        {/* <div className={styles.navbar}>
          <Link to="/admin">Home</Link>
          <Link to="/admin">Home</Link>
          <Link to="/admin">Home</Link>
        </div> */}
        <h1>Add Post</h1>
        <section>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              required
              aria-required
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="sub_heading">Sub heading</label>
            <input
              type="text"
              name="sub_heading"
              value={formData.sub_heading}
              required
              aria-required
              onChange={handleChange}
            />
          </div>
          <div>
            <ReactQuill theme="snow" value={post} onChange={setPost} />
          </div>
          <div>
            <label htmlFor="year">Year</label>
            <input
              type="text"
              name="year"
              value={formData.year}
              required
              aria-required
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="picture"></label>
            <input
              required
              aria-required
              onChange={handleChange}
              type="file"
              id="picture"
              name="picture"
            />
          </div>
          <div>
            <label htmlFor="tag">Tag</label>
            <input
              type="text"
              name="tag"
              value={formData.tag}
              required
              aria-required
              onChange={handleChange}
            />
          </div>
          <div>
            <button>submit</button>
          </div>
        </section>
      </form>
      <hr />
      <hr />
      <hr />
      <form
        onSubmit={handleAncestriesSubmit}
        encType="multipart/form-data"
        className={styles.containerKF3}
      >
        <h1>Add Ancestries Post</h1>
        <section>
          <div>
            <label htmlFor="post_heading">Post</label>
            <input
              type="text"
              name="post_heading"
              value={formData1.post_heading}
              required
              aria-required
              onChange={handleChange1}
            />
          </div>
          <div>
            <label htmlFor="sub_heading">Sub heading</label>
            <input
              type="text"
              name="post_sub_heading"
              value={formData1.post_sub_heading}
              required
              aria-required
              onChange={handleChange1}
            />
          </div>
          <div>
            <ReactQuill theme="snow" value={content} onChange={setContent} />
          </div>
          <div>
            <label htmlFor="age">Date of birth (yyyy-mm-dd)</label>
            <input
              type="text"
              name="age"
              value={formData1.age}
              required
              aria-required
              onChange={handleChange1}
            />
          </div>
          <div>
            <label htmlFor="ancestries_posts_imgs"></label>
            <input
              required
              aria-required
              onChange={handleChange1}
              type="file"
              id="ancestries_posts_imgs"
              name="ancestries_posts_imgs"
              multiple
            />
          </div>
          <div>
            <label htmlFor="sex">Sex (0 for female, 1 for male)</label>
            <input
              type="text"
              name="sex"
              value={formData1.sex}
              required
              aria-required
              onChange={handleChange1}
            />
          </div>
          <div>
            <label htmlFor="email">email</label>
            <input
              type="text"
              name="email"
              value={formData1.email}
              required
              aria-required
              onChange={handleChange1}
            />
          </div>
          <div>
            <label htmlFor="address">address</label>
            <input
              type="text"
              name="address"
              value={formData1.address}
              required
              aria-required
              onChange={handleChange1}
            />
          </div>
          <div>
            <label htmlFor="state">state</label>
            <input
              type="text"
              name="state"
              value={formData1.state}
              required
              aria-required
              onChange={handleChange1}
            />
          </div>
          <div>
            <label htmlFor="nationality">nationality</label>
            <input
              type="text"
              name="nationality"
              value={formData1.nationality}
              required
              aria-required
              onChange={handleChange1}
            />
          </div>
          <div>
            <label htmlFor="date_year">date year</label>
            <input
              type="text"
              name="date_year"
              value={formData1.date_year}
              required
              aria-required
              onChange={handleChange1}
            />
          </div>
          <div>
            <button>submit</button>
          </div>
        </section>
      </form>
    </div>
  );
};
