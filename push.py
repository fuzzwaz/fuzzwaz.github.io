import tkinter as tk
from tkinter import messagebox
import subprocess
import threading

REPO_PATH = r"C:\Users\fuzzw\fuzzwaz.github.io"


def run_git(message, status_label, btn):
    btn.config(state="disabled")
    status_label.config(text="Pushing...", fg="#64ffda")

    try:
        cmds = [
            ["git", "add", "."],
            ["git", "commit", "-m", message],
            ["git", "push"],
        ]
        for cmd in cmds:
            result = subprocess.run(
                cmd, cwd=REPO_PATH, capture_output=True, text=True
            )
            if result.returncode != 0:
                err = result.stderr.strip() or result.stdout.strip()
                status_label.config(text=f"Error: {err}", fg="#ff6b6b")
                btn.config(state="normal")
                return

        status_label.config(text="Pushed successfully!", fg="#64ffda")
    except Exception as e:
        status_label.config(text=f"Error: {e}", fg="#ff6b6b")
    finally:
        btn.config(state="normal")


def on_push(entry, status_label, btn):
    message = entry.get().strip()
    if not message:
        messagebox.showwarning("No message", "Please enter a commit message.")
        return
    threading.Thread(target=run_git, args=(message, status_label, btn), daemon=True).start()


root = tk.Tk()
root.title("Portfolio Push")
root.configure(bg="#0a0a0f")
root.resizable(False, False)

pad = {"padx": 20, "pady": 10}

tk.Label(root, text="Commit message:", bg="#0a0a0f", fg="#ccd6f6",
         font=("Segoe UI", 11)).pack(anchor="w", **pad)

entry = tk.Entry(root, width=50, font=("Segoe UI", 11),
                 bg="#1a1a2e", fg="#ccd6f6", insertbackground="#64ffda",
                 relief="flat", bd=6)
entry.pack(padx=20, pady=(0, 10))
entry.focus()

btn = tk.Button(root, text="Commit & Push", font=("Segoe UI", 11, "bold"),
                bg="#64ffda", fg="#0a0a0f", activebackground="#4ecdc4",
                relief="flat", bd=0, padx=16, pady=8,
                command=lambda: on_push(entry, status_label, btn))
btn.pack(pady=(0, 10))

status_label = tk.Label(root, text="", bg="#0a0a0f", fg="#64ffda",
                        font=("Segoe UI", 10), wraplength=380)
status_label.pack(**pad)

# Allow Enter key to trigger push
root.bind("<Return>", lambda e: on_push(entry, status_label, btn))

root.mainloop()
