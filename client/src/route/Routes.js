import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "components/home/Home";
import Gather from "components/gather/Gather";
import Save from "components/save/Save";
import Compete from "components/compete/pages/Compete";
import Profile from "components/profile/pages/Profile";
import CompeteDetail from "components/compete/pages/CompDetail";
import AddMilitarySavings from "components/gather/addMilitarySavings/views/AddMilitarySavings";
import AvailableSavingItemDetail from "components/gather/addMilitarySavings/views/AvailableSavingItemDetail";
import AddMilitarySavingsTerm from "components/gather/addMilitarySavings/views/AddMilitarySavingsTerm";
import AddMilitarySavingsForm from "components/gather/addMilitarySavings/views/AddMilitarySavingsForm";
import AddMilitarySavingSuccess from "components/gather/addMilitarySavings/views/AddMilitarySavingSucess";
import SafeBox from "components/gather/safebox/view/SafeBox";
import Goal from "components/gather/addGoal/view/Goal";
import Complete from "components/gather/addGoal/view/Complete";
import MobileKeypad from "components/gather/safebox/MobileKeypad";
import CompHowTo from "components/compete/pages/CompHowTo";
import KeyPopUp from "components/common/KeyPopUp";
import Reward from "components/reward/views/Reward";
import MyReward from "components/reward/views/MyReward";
import MyProducItemDetail from "components/reward/MyProducItemDetail";
import GatherDetail from "components/gather/detail/view/GatherDetail";
import EditGoal from "components/gather/detail/view/EditGoal";
import EditDeposit from "components/gather/detail/view/EditDeposit";
import MidTermTermination from "components/gather/detail/view/MidTermTermination";
import RegisterDeposit from "components/gather/detail/view/RegisterDeposit";
import MilitaryDetail from "components/gather/MilitaryDetail";
import AdditionalDeposit from "components/gather/detail/AdditionalDeposit";
import SignIn from "components/signInUp/SignIn";
import SignUp from "components/signInUp/SignUp";
import ResetPassword from "components/signInUp/ResetPassword";
import MilitaryDetailEdit from "components/gather/MilitaryDetailEdit";
import EditSavingTitle from "components/gather/addMilitarySavings/views/EditSavingTitle";
import AddMilitarySavingsPassward from "components/gather/addMilitarySavings/views/AddMilitarySavingsPassward";
import AboutReward from "components/reward/views/AboutReward";
import CheckPassword from "components/gather/detail/view/CheckPassword";
import TerminationComplete from "components/gather/detail/view/TerminationComplete";
import AddMoaSaving from "components/gather/addMoaSaving/AddMoaSaving";
import AddMoaSavingPassward from "components/gather/addMoaSaving/AddMoaSavingPassward";
import AddMoaSavingSuccess from "components/gather/addMoaSaving/AddMoaSavingSuccess";
import AddMoaSavingTerm from "components/gather/addMoaSaving/AddMoaSavingTerm";
import Loading from "components/loading/Loading";
import ProfileEdit from "components/profile/pages/ProfileEdit";
import ProfileAccount from "components/profile/pages/ProfileAccount";
import AdditionalComplete from "components/gather/detail/view/AdditionalComplete";
import TakeInOutSafeBox from "components/gather/detail/view/TakeInOutSafeBox";
import EditComplete from "components/gather/detail/view/EditComplete";
import Notice from "components/profile/pages/Notice";
import MyBoxOpen from "components/reward/views/MyBoxOpen";
import InterLock from "components/interlock/pages/InterLock";
import StartMoa from "components/common/StartMoa";
function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<StartMoa />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/home" element={<Home />} />
      <Route path="/gather" element={<Gather />} />
      <Route path="/loading" element={<Loading />} />
      <Route path="/notice" element={<Notice />} />
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
      <Route
        path="/gather/detail/edit-goal/complete"
        element={<EditComplete />}
      />
      <Route path="/gather/detail/edit-deposit" element={<EditDeposit />} />
      <Route
        path="/gather/detail/edit-deposit/complete"
        element={<EditComplete />}
      />
      <Route
        path="/gather/detail/register-deposit"
        element={<RegisterDeposit />}
      />
      <Route
        path="/gather/detail/register-deposit/complete"
        element={<EditComplete />}
      />
      <Route
        path="/gather/detail/additional-deposit"
        element={<AdditionalDeposit />}
      />
      <Route
        path="/gather/detail/additional-deposit/complete"
        element={<AdditionalComplete />}
      />
      <Route
        path="/gather/detail/take-in-safebox"
        element={<TakeInOutSafeBox />}
      />
      <Route
        path="/gather/detail/take-out-safebox"
        element={<TakeInOutSafeBox />}
      />
      <Route
        path="/gather/detail/take-in-safebox/complete"
        element={<AdditionalComplete />}
      />
      <Route
        path="/gather/detail/take-out-safebox/check-password"
        element={<CheckPassword />}
      />
      <Route
        path="/gather/detail/take-out-safebox/check-password/complete"
        element={<AdditionalComplete />}
      />
      <Route
        path="/gather/detail/midterm-termination"
        element={<MidTermTermination />}
      />
      <Route
        path="/gather/detail/midterm-termination/check-password"
        element={<CheckPassword />}
      />
      <Route
        path="/gather/detail/midterm-termination/check-password/complete"
        element={<TerminationComplete />}
      />
      <Route path="/gather/mili-detail" element={<MilitaryDetail />} />
      <Route path="/gather/mili-detail/edit" element={<MilitaryDetailEdit />} />
      <Route path="/save" element={<Save />} />
      <Route path="/compete" element={<Compete />} />
      <Route path="/compete/howto" element={<CompHowTo />} />
      <Route path="/compete/:id" element={<CompeteDetail />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/account" element={<ProfileAccount />} />
      <Route path="/profile/edit" element={<ProfileEdit />} />
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

      <Route path="/interlock" element={<InterLock />} />
    </Routes>
  );
}

export default AllRoutes;
