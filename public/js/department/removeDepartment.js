const removeDepartmentButtons = document.querySelectorAll(".department-remove")


removeDepartmentButtons.forEach(button => {
    button.addEventListener("click", () => {
        const deptId = button.dataset.deptid
        
        fetch(`/manage/department/delete/${deptId}`, {
            method: "DELETE"
        }).then(res => {
            window.location.href = "/"
        }).catch (err => {
            console.log(err)
        })
    })
})


