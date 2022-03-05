
class ValidateForm {
    form = {}

    constructor(form) {
        this.form = form
    }

    cardNumber() {
        const cardNumber = this.form.cardNumber.replace(/[^\d]/g, '')
        return (typeof +cardNumber === "number" && cardNumber.length === 16) ? true : false
    }

    date() {
        const date = this.form.date
        if (date.replace(/_/g, "").length === 7) {
            const month = +date.match(/\d{2}/g)[0]
            const year = +date.match(/\d{4}/g)[0]
            const now = new Date()
            if (month > 0 && month < 13) {
                return (year > now.getFullYear()) ? true : (year === now.getFullYear()) ? (month >= now.getMonth() + 1) : false
            } else {
                return false
            }
        } else {
            return false
        }
    }

    cvv() {
        const cvv = this.form.cvv.replace(/[^\d]/g, '')
        return (typeof +cvv === "number" && cvv.length === 3) ? true : false
    }

    amount() {
        const amount = this.form.amount
        return (amount && typeof +amount === "number") ? true : false
    }

     

    checkForm() {
        return this.cardNumber() && this.date() && this.cvv() && this.amount()
    }
}

export default ValidateForm