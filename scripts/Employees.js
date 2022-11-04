import { getEmployees , getOrders , getProducts } from "./database.js"

const employees = getEmployees();
const orders = getOrders();
const products = getProducts();

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

document.addEventListener("click",(clickEvent) => {
    const itemClicked = clickEvent.target
    if (itemClicked.id.startsWith("employee")) {
        let counter = 0
        let employeeName = ""
        const [,employeeId] = itemClicked.id.split("--")
        for (const employee of employees) {
            if (employee.id === parseInt(employeeId)) {
                for (const order of orders) {
                    if (order.employeeId === employee.id) {
                        counter ++
                        employeeName = employee.name
                    }
                }
            }
        }
        window.alert(`${employeeName} has sold ${counter} products.`)
    }
})
