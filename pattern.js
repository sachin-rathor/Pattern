var outer = 4;
var space = " ";

function printing() {
    for ( out = 1; out <= outer; out++ ) {
        for ( inn = 1; inn <= out; inn++ ) {
            document.write(inn);
        }
        document.write("</br>");
    }
}