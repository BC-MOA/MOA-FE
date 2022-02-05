import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "components/home/Home";
import Gather from "components/gather/Gather";
import Save from "components/save/Save";
import Compete from "components/compete/pages/Compete";
import Profile from "components/profile/Profile";
import CompeteDetail from "components/compete/pages/CompDetail";
import AddMilitarySavings from "components/gather/addMilitarySavings/AddMilitarySavings";
import AvailableSavingItemDetail from "components/gather/addMilitarySavings/AvailableSavingItemDetail";
import AddMilitarySavingsTerm from "components/gather/addMilitarySavings/AddMilitarySavingsTerm";
import AddMilitarySavingsForm from "components/gather/addMilitarySavings/AddMilitarySavingsForm";
import AddMilitarySavingSuccess from "components/gather/addMilitarySavings/AddMilitarySavingSucess";
import SafeBox from "components/gather/safebox/SafeBox";
import Goal from "components/gather/addGoal/Goal";
import Complete from "components/gather/addGoal/Complete";
import MobileKeypad from "components/gather/safebox/MobileKeypad";
import CompHowTo from "components/compete/pages/CompHowTo";
import KeyPopUp from "components/common/KeyPopUp";
import Reward from "components/reward/Reward";
import MyReward from "components/reward/MyReward";
import MyProducItemDetail from "components/reward/MyProducItemDetail";
import GatherDetail from "components/gather/GatherDetail";
import EditGoal from "components/gather/EditGoal";
import EditDeposit from "components/gather/EditDeposit";
import MidTermTermination from "components/gather/MidTermTermination";
import MyBoxOpen from "components/reward/MyBoxOpen";
import RegisterDeposit from "components/gather/RegisterDeposit";
import MilitaryDetail from "components/gather/MilitaryDetail";
import AdditionalDeposit from "components/gather/AdditionalDeposit";
import SignIn from "components/signInUp/SignIn";
import SignUp from "components/signInUp/SignUp";
import ResetPassword from "components/signInUp/ResetPassword";
import MilitaryDetailEdit from "components/gather/MilitaryDetailEdit";
import EditSavingTitle from "components/gather/addMilitarySavings/EditSavingTitle";
import AddMilitarySavingsPassward from "components/gather/addMilitarySavings/AddMilitarySavingsPassward";
import AboutReward from "components/reward/AboutReward";
import AddMoaSaving from "components/gather/addMoaSaving/AddMoaSaving";
import AddMoaSavingPassward from "components/gather/addMoaSaving/AddMoaSavingPassward";
import AddMoaSavingSuccess from "components/gather/addMoaSaving/AddMoaSavingSuccess";
import AddMoaSavingTerm from "components/gather/addMoaSaving/AddMoaSavingTerm";
import Loading from "components/loading/Loading";
function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/home" element={<Home />} />
      <Route path="/gather" element={<Gather />} />
      <Route path="/loading" element={<Loading />} />
      <Route
        path="/gather/add-militarySaving"
        element={<AddMilitarySavings />}
      />
      <Route
        path="/gather/add-militarySaving/:bankname"
        element={<AvailableSavingItemDetail />}
      />
      <Route
        path="/gather/add-militarySaving/:bankname/term"
        element={<AddMilitarySavingsTerm />}
      />
      <Route
        path="/gather/add-militarySaving/:bankname/term/form"
        element={<AddMilitarySavingsForm />}
      />

      <Route
        path="/gather/add-militarySaving/:bankname/term/form/passward"
        element={<AddMilitarySavingsPassward />}
      />
      <Route
        path="/gather/add-militarySaving/:bankname/term/form/passward/success"
        element={<AddMilitarySavingSuccess />}
      />
      <Route
        path="/gather/add-militarySaving/:bankname/term/form/passward/success/edit"
        element={<EditSavingTitle />}
      />
      <Route path="/gather/add-goal" element={<Goal />} />
      <Route path="/gather/add-goal/complete" element={<Complete />} />
      <Route path="/gather/add-safebox" element={<SafeBox />} />
      <Route path="/gather/add-safebox/complete" element={<Complete />} />

      <Route path="/gather/add-moa" element={<AddMoaSaving />} />
      <Route path="/gather/add-moa/term" element={<AddMoaSavingTerm />} />
      <Route
        path="/gather/add-moa/term/passward"
        element={<AddMoaSavingPassward />}
      />
      <Route
        path="/gather/add-moa/term/passward/success"
        element={<AddMoaSavingSuccess />}
      />

      <Route path="/gather/detail" element={<GatherDetail />} />
      <Route path="/gather/detail/edit-goal" element={<EditGoal />} />
      <Route path="/gather/detail/edit-deposit" element={<EditDeposit />} />
      <Route
        path="/gather/detail/additional-deposit"
        element={<AdditionalDeposit />}
      />
      <Route
        path="/gather/detail/register-deposit"
        element={<RegisterDeposit />}
      />
      <Route
        path="/gather/detail/midterm-termination"
        element={<MidTermTermination />}
      />
      <Route path="/gather/mili-detail" element={<MilitaryDetail />} />
      <Route path="/gather/mili-detail/edit" element={<MilitaryDetailEdit />} />
      <Route path="/save" element={<Save />} />
      <Route path="/compete" element={<Compete />} />
      <Route path="/compete/howto" element={<CompHowTo />} />
      <Route path="/compete/:id" element={<CompeteDetail />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/keypad" element={<MobileKeypad />} />
      <Route path="/key" element={<KeyPopUp />}></Route>
      <Route path="/reward" element={<Reward />} />
      <Route path="/reward/about" element={<AboutReward />} />
      <Route path="/reward/:userId" element={<MyReward />} />
      <Route
        path="/reward/:userId/:productId"
        element={<MyProducItemDetail />}
      />
      <Route path="/reward/:userId/select/:boxId" element={<MyBoxOpen />} />
    </Routes>
  );
}

export default AllRoutes;
