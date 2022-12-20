import axios from "axios";
import React from "react";
import { StyledButton } from "./StyledButton";

export const TaskCard = ({ task, setTasks }) => {
    const date = new Date(task.dueAt);
    const today = new Date();

    const handleDelete = (e) => {
        e.preventDefault();

        const server = process.env.REACT_APP_SERVER || "http://localhost:8000";
        axios
            .delete(`${server}/api/tasks/${task.id}`)
            .then((response) => {
                console.log(response);
                setTasks((prev) => prev.filter((t) => t.id !== task.id));
            })
            .catch((err) => {
                console.error(err);
            });
    };

    return (
        <div className="w-full flex bg-white px-8 py-6 items-center  text-xl rounded-lg drop-shadow-sm hover:py-8 transition-all cursor-pointer">
            <h4 className="text-2xl flex-1">{task.title}</h4>
            {today < date ? (
                <p className="text-right flex-1">
                    Due {date.toLocaleDateString()}
                </p>
            ) : (
                <p className="text-right text-red-500 flex-1">Due Today!</p>
            )}
            <div className="flex gap-5 flex-1 justify-end">
                <StyledButton theme="red" onClick={handleDelete}>
                    Delete
                </StyledButton>
                <StyledButton theme="cyan">Update</StyledButton>
            </div>
        </div>
    );
};
