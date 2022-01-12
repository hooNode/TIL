function boolean(input1, input2) {
    if ((input1 || input2) === true) {
        return true;
    } else if ((input1 && input2) === false) {
        return false;
    }
}

boolean(false, false)