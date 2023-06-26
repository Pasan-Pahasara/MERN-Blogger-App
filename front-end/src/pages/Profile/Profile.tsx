import { ChangeEvent, Component } from "react";
import Header from "../../components/Header";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import PostAddIcon from "@mui/icons-material/PostAdd";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { Divider, TextField } from "@mui/material";
import { PostDetails } from "../../types/PostDetails";
import api from "../../axios";
import Post from "../../components/Post";
import AdminLayout from "../admin/AdminLayout";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { hover } from "@testing-library/user-event/dist/hover";

type ProfileProps = {};

type ProfileState = {
  postList: PostDetails[];
  isClickedCreateNewPost: boolean;
  image: string;
  title: string;
  description: string;
  date: string;
  userName: string;
};

export default class Profile extends Component<ProfileProps, ProfileState> {
  constructor(props: ProfileProps) {
    super(props);
    this.state = {
      image: "",
      title: "",
      description: "",
      date: "",
      userName: "",
      isClickedCreateNewPost: false,
      postList: [],
    };
  }

  componentDidMount(): void {
    this.retrieveAllPosts();
  }

  retrieveAllPosts = () => {
    api
      .get("post")
      .then((res) => {
        console.log(res);
        this.setState((prevState) => ({
          ...prevState,
          postList: res.data.responseData,
        }));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleClickCreateNewPost = () => {
    this.setState((prevState) => ({
      ...prevState,
      isClickedCreateNewPost: !prevState.isClickedCreateNewPost,
    }));
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Submitted");

    console.log(this.state);

    // destructuring assignment
    const { image, title, description, date, userName } = this.state;

    let newPost = {
      image: image,
      title: title,
      description: description,
      date: date,
      userName: userName,
    };

    // Here, you should pass the post object to back-end for the stroring purposes

    api
      .post("post", newPost)
      .then((res) => {
        console.log(res);
        this.setState((prevState) => ({
          postList: [...prevState.postList, res.data.responseData],
        }));
        this.clearState();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    // desctructuring assignment
    const { name, value, type } = event.target;

    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  clearState = () => {
    this.setState((prevState) => ({
      ...prevState,
      image: "",
      title: "",
      description: "",
      date: "",
      userName: "",
    }));
  };

  removePostFromList = (postId: string) => {
    this.setState((prevstate) => ({
      postList: prevstate.postList.filter((post) => post._id !== postId),
    }));
  };

  // Create a custom theme with the desired TextField styles
  theme = createTheme({
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px", // Define your own border radius
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1), 0 2px 10px rgba(0, 0, 0, 0.1)", // Define your own box-shadow
            },
          },
        },
      },
    },
  });

  render() {
    return (
      <AdminLayout>
        <div className="mt-20 py-6 px-32">
          <div className="w-full flex flex-col space-y-1">
            {!this.state.isClickedCreateNewPost ? (
              <>
                <div
                  className="cursor-pointer w-full p-4 bg-purple-600 text-white rounded-ss-2xl rounded-ee-2xl rounded-t-lg rounded-b-lg flex justify-between items-center shadow-2xl"
                  onClick={this.handleClickCreateNewPost}
                >
                  <h6 className="uppercase font-Ubuntu font-bold">
                    Create New Article
                  </h6>
                  <AddCircleIcon />
                </div>
                <div
                  className="cursor-pointer p-8 bg-white text-slate-400 flex justify-center items-center space-x-3 rounded-ss-3xl rounded-ee-3xl rounded-t-lg  rounded-l-lg shadow-2xl"
                  onClick={this.handleClickCreateNewPost}
                >
                  <PostAddIcon />
                  <h6 className="uppercase font-Ubuntu font-bold">
                    Your New Article
                  </h6>
                </div>
              </>
            ) : (
              <>
                <div
                  className="cursor-pointer w-full p-4 bg-purple-600 text-white rounded-ss-2xl rounded-ee-2xl rounded-t-lg rounded-b-lg flex justify-between items-center"
                  onClick={this.handleClickCreateNewPost}
                >
                  <h6 className="uppercase font-Ubuntu font-bold">
                    Discard Article
                  </h6>
                  <RemoveCircleIcon />
                </div>
                <div className="w-full cursor-pointer p-8 bg-white rounded-ss-3xl rounded-ee-3xl rounded-t-lg  rounded-l-lg text-slate-400 flex justify-center items-center space-x-3 shadow-2xl">
                  <form
                    className="flex flex-col space-y-3 w-full"
                    onSubmit={this.handleSubmit}
                  >
                    <ThemeProvider theme={this.theme}>
                      <input
                        className="block w-full text-lg text-gray-900 border border-gray-300 rounded-r-xl cursor-pointer bg-gray-50 dark:text-gray-400  dark:placeholder-gray-600" style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1), 0 2px 10px rgba(0, 0, 0, 0.1)" }}
                        id="large_size"
                        type="file"
                      />

                      <TextField
                        label="Article Title"
                        type="text"
                        variant="outlined"
                        name="title"
                        placeholder="Enter Article title"
                        onChange={this.handleInputChange}
                        value={this.state.title}
                        fullWidth={true}
                        required
                      />

                      <TextField
                        label="Article Description"
                        type="text"
                        variant="outlined"
                        name="description"
                        placeholder="Enter Article Description"
                        value={this.state.description}
                        onChange={this.handleInputChange}
                        fullWidth={true}
                        multiline
                        minRows={5}
                        maxRows={Infinity}
                        required
                      />
                      <TextField
                        label="Date"
                        type="number"
                        variant="outlined"
                        name="hoursCount"
                        placeholder="Enter Date"
                        onChange={this.handleInputChange}
                        value={this.state.date}
                        fullWidth={true}
                      />
                      <TextField
                        label="User Name"
                        type="text"
                        variant="outlined"
                        placeholder="Enter User Name"
                        name="lecturerName"
                        onChange={this.handleInputChange}
                        value={this.state.userName}
                        fullWidth={true}
                      />
                    </ThemeProvider>
                    <button className="py-2 bg-purple-600 text-white rounded-2xl hover:bg-purple-700 transition-colors duration-300">
                      <h6 className="uppercase font-Ubuntu">Publish Post</h6>
                    </button>
                  </form>
                </div>
              </>
            )}
          </div>

          <Divider className="!my-5" />

          {this.state.postList.map((post) => (
            <Post
              key={post._id}
              _id={post._id}
              image={post.image}
              title={post.title}
              description={post.description}
              date={post.date}
              userName={post.userName}
              removePostFromList={this.removePostFromList}
            />
          ))}
        </div>
      </AdminLayout>
    );
  }
}
