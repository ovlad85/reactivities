import { Box, Container, CssBaseline } from "@mui/material";
import NavBar from "./NavBar";
import { Outlet } from "react-router";

function App() {
// const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
// const [editMode, setEditMode] = useState(false);



  // const handleSelectActivity = (id: string) => {
  //   setSelectedActivity(activities?.find(x => x.id === id));
  //   console.log(id);
  // }

  // const handleCancelSelectActivity = () => {
  //   setSelectedActivity(undefined);
  // } 

  // const handleOpenForm = (id?: string) => {
  //   if (id) handleSelectActivity(id);
  //   else handleCancelSelectActivity();
  //   setEditMode(true);
  // }

  // const handleFormClose = () => {
  //   setEditMode(false);
  // }

  // const handleSubmitForm = (activity: Activity) => {
  //   // if (activity.id) {
  //   //   setActivities(activities.map(x => x.id === activity.id ? activity : x));
  //   // } else {
  //   //   const newActivity = {...activity, id: activities.length.toString()};
  //   //   setSelectedActivity(newActivity);
  //   //   setActivities([...activities, newActivity]);
  //   // }
  //   console.log(activity);
  //   setEditMode(false);
  // }

  // const handleDelete = (id: string) => {
  //   // setActivities(activities.filter(x => x.id !== id));
  //   console.log(id)
  // }

  return (
    <Box sx={{bgcolor:'#eeeeee', minHeight: '100vh'}}>
    <CssBaseline/>
      <NavBar />
      <Container maxWidth="xl" sx={{mt: 3}}>
        <Outlet />
      </Container>
    </Box>
    
  )
}

export default App
