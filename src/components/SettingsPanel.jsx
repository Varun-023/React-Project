import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Switch from "@mui/material/Switch";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Alert from "@mui/material/Alert";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { updateProfile, updatePreferences, toggleTheme } from "../redux/uiSlice";

const profileSchema = yup.object({
    name: yup.string().required("Full name is required").min(3, "Name must be at least 3 characters"),
    email: yup.string().required("Email is required").email("Enter a valid email address")
}).required();

const SettingsPanel = React.memo(function SettingsPanel() {
    const dispatch = useDispatch();
    const profile = useSelector((state) => state.ui.profile);
    const preferences = useSelector((state) => state.ui.preferences);
    const darkMode = useSelector((state) => state.ui.darkMode);
    
    const [message, setMessage] = useState("");

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(profileSchema),
        defaultValues: {
            name: profile?.name || "",
            email: profile?.email || ""
        }
    });

    const onSubmitProfile = (data) => {
        dispatch(updateProfile({ name: data.name, email: data.email }));
        setMessage("Profile saved successfully");
    };

    function savePreferences() {
        dispatch(updatePreferences(preferences));
        setMessage("Preferences saved successfully");
    }

    function handleDarkModeChange() {
        dispatch(toggleTheme());
    }

    return (
        <>
            <Typography variant="h5" sx={{ mb: 3 }}>
                Settings
            </Typography>

            {message && (
                <Alert severity="success" sx={{ mb: 2, maxWidth: 600 }} onClose={() => setMessage("")}>
                    {message}
                </Alert>
            )}

            <Card sx={{ mb: 3, maxWidth: 600 }}>
                <CardContent>
                    <Typography variant="h6" sx={{ mb: 2 }}>Profile Settings</Typography>
                    
                    <form onSubmit={handleSubmit(onSubmitProfile)}>
                        <TextField
                            label="Full Name"
                            {...register("name")}
                            error={!!errors.name}
                            helperText={errors.name?.message}
                            fullWidth
                            sx={{ mb: 2 }}
                        />

                        <TextField
                            label="Email Address"
                            {...register("email")}
                            error={!!errors.email}
                            helperText={errors.email?.message}
                            fullWidth
                            sx={{ mb: 2 }}
                        />

                        <Button variant="contained" type="submit">
                            Save Profile
                        </Button>
                    </form>
                </CardContent>
            </Card>

            <Card sx={{ mb: 3, maxWidth: 600 }}>
                <CardContent>
                    <Typography variant="h6" sx={{ mb: 2 }}>Preferences</Typography>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={preferences.emailNotifications}
                                    onChange={(e) => dispatch(updatePreferences({
                                        ...preferences,
                                        emailNotifications: e.target.checked
                                    }))}
                                />
                            }
                            label="Email Notifications"
                        />
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={darkMode}
                                    onChange={handleDarkModeChange}
                                />
                            }
                            label="Dark Mode"
                        />
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={preferences.weeklyReports}
                                    onChange={(e) => dispatch(updatePreferences({
                                        ...preferences,
                                        weeklyReports: e.target.checked
                                    }))}
                                />
                            }
                            label="Weekly Reports"
                        />
                    </Box>
                    <Button variant="outlined" sx={{ mt: 2 }} onClick={savePreferences}>
                        Save Preferences
                    </Button>
                </CardContent>
            </Card>

            <Card sx={{ maxWidth: 600 }}>
                <CardContent>
                    <Typography variant="h6" sx={{ mb: 2 }}>Security</Typography>
                    <TextField label="Current Password" type="password" fullWidth sx={{ mb: 2 }} />
                    <TextField label="New Password" type="password" fullWidth sx={{ mb: 2 }} />
                    <Button
                        variant="outlined"
                        color="primary"
                        onClick={() => setMessage("Password update simulated successfully")}
                    >
                        Update Password
                    </Button>
                </CardContent>
            </Card>
        </>
    );
});

export default SettingsPanel;
