export function ContactForm(){
    const d = document,
        $form = d.createElement("form");

    $form.innerHTML = `
    <legend>Envianos tus comentarios</legend>
        <input type="text" name="name" placeholder="Escribe tu nombre"
        title="El campo nombre solo recibe letras y espacios en blanco."
        pattern ="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$" required>
        <input type="email" name ="email" placeholder="Escibe tu Email" title="email incorrecto"
        pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$" required>
        <input type="text" name="subject" placeholder="Asunto a tratar"
        title="El asunto es requerido" required>
        <textarea name="comments" cols="50" rows="5" placeholder="escribe tus comentarios" 
        title="Tu comentario no debe exceder los 255 caracteres"
        data-pattern="^.{1,255}$" 
        required></textarea>
        <input type="submit" value="Enviar">
        <div class="contact-form-loader none">
            <img src="../assets/spinning-circles.svg" alt="Cargando">
        </div>
        <div class="contact-form-response none">
            <p>Los datos han sido enviados</p>
        </div>
    `;
    return $form;
}