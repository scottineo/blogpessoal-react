import { useState, useEffect, type ChangeEvent, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import type Usuario from "../../models/Usuario";
import { cadastrarUsuario } from "../../services/Service";
import "./Cadastro.css";
import { RotatingLines } from "react-loader-spinner";
import axios from "axios";

function Cadastro() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [confirmaSenha, setConfirmaSenha] = useState<string>("");

  const [usuario, setUsuario] = useState<Usuario>({} as Usuario);

  const [errors, setErrors] = useState<{
    nome?: string;
    usuario?: string;
    senha?: string;
    confirmaSenha?: string;
  }>({});

  useEffect(() => {
    if (usuario.id == undefined) {
      retornar("/cadastro");
    }
  }, [usuario]);

  function retornar(p0: string) {
    navigate("/");
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
    if (errors[e.target.name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [e.target.name]: null,
      }));
    }
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value);
  }
  const validateForm = () => {
    const newErrors: any = {};
    if (!usuario.nome || !usuario.nome.trim())
      newErrors.nome = "O nome é obrigatório.";

    if (!usuario.usuario || !usuario.usuario.trim()) {
      newErrors.usuario = "O e-mail é obrigatório.";
    } else if (!/\S+@\S+\.\S+/.test(usuario.usuario)) {
      newErrors.usuario = "Por favor, insira um e-mail válido.";
    }

    if (!usuario.senha) {
      newErrors.senha = "A senha é obrigatória.";
    } else if (usuario.senha.length < 8) {
      newErrors.senha = "A senha deve ter no mínimo 8 caracteres.";
    }
    if (!confirmaSenha.trim()) {
      newErrors.confirmaSenha = "A confirmação de senha é obrigatória.";
    } else if (usuario.senha !== confirmaSenha) {
      newErrors.confirmaSenha = "As senhas não coincidem.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (!validateForm()) {
      setIsLoading(false);
      return;
    }
    try {
      await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuario);
      alert("Usuário cadastrado com sucesso!");
    } catch (error) {
      let errorMessage = "Erro ao cadastrar o usuário!";
      if (axios.isAxiosError(error)) {
        const serverError = error.response?.data;
        if (
          serverError &&
          typeof serverError === "object" &&
          "message" in serverError &&
          typeof serverError.message === "string"
        ) {
          errorMessage = `Erro ao cadastrar: ${serverError.message}`;
        } else if (error.message) {
          errorMessage = `Erro ao cadastrar: ${error.message}`;
        }
        console.error(
          "Detalhes do erro (Axios):",
          error.response?.data || error.message
        );
      } else {
        console.error("Detalhes do erro (Geral):", error);
      }
      alert(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <div
        className="grid grid-cols-1 lg:grid-cols-2 h-screen 
            place-items-center font-bold"
      >
        <div className="fundoCadastro hidden lg:block"></div>
        <form
          className="flex justify-center items-center flex-col w-2/3 gap-3"
          onSubmit={cadastrarNovoUsuario}
          noValidate
        >
          <h2 className="text-slate-900 text-5xl">Cadastrar</h2>

          <div className="flex flex-col w-full">
            <label htmlFor="nome">
              Nome <span className="obrigatorio">*</span>
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Nome completo"
              className={`border-2 border-slate-700 rounded p-2 ${
                errors.nome ? "input-error" : ""
              }`}
              value={usuario.nome}
              onChange={atualizarEstado}
              aria-invalid={!!errors.nome}
              aria-describedby={errors.nome ? "nome-error" : undefined}
            />
            {errors.nome && (
              <span id="nome-error" className="mensagem-erro">
                {errors.nome}
              </span>
            )}
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="usuario">
              E-mail <span className="obrigatorio">*</span>
            </label>
            <input
              type="email"
              id="usuario"
              name="usuario"
              placeholder="seuemail@exemplo.com"
              className={`border-2 border-slate-700 rounded p-2 ${
                errors.usuario ? "input-error" : ""
              }`}
              value={usuario.usuario}
              onChange={atualizarEstado}
              aria-invalid={!!errors.usuario}
              aria-describedby={errors.usuario ? "usuario-error" : undefined}
            />
            {errors.usuario && (
              <span id="usuario-error" className="mensagem-erro">
                {errors.usuario}
              </span>
            )}
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="foto">Foto (URL)</label>
            <input
              type="url"
              id="foto"
              name="foto"
              placeholder="URL da sua foto"
              className="border-2 border-slate-700 rounded p-2"
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="senha">
              Senha <span className="obrigatorio">*</span>
            </label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Mínimo 8 caracteres"
              className={`border-2 border-slate-700 rounded p-2 ${
                errors.senha ? "input-error" : ""
              }`}
              value={usuario.senha}
              onChange={atualizarEstado}
              aria-invalid={!!errors.senha}
              aria-describedby={errors.senha ? "senha-error" : undefined}
            />
            {errors.senha && (
              <span id="senha-error" className="mensagem-erro">
                {errors.senha}
              </span>
            )}
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="confirmarSenha">
              Confirmar Senha <span className="obrigatorio">*</span>
            </label>
            <input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              placeholder="Repita a senha"
              className={`border-2 border-slate-700 rounded p-2 ${
                errors.confirmaSenha ? "input-error" : ""
              }`}
              value={confirmaSenha}
              onChange={handleConfirmarSenha}
              aria-invalid={!!errors.confirmaSenha}
              aria-describedby={
                errors.confirmaSenha ? "confirmarSenha-error" : undefined
              }
            />
            {errors.confirmaSenha && (
              <span id="confirmarSenha-error" className="mensagem-erro">
                {errors.confirmaSenha}
              </span>
            )}
          </div>

          <div className="flex justify-around w-full gap-8 mt-4">
            <button
              type="button"
              className="rounded text-white bg-red-400 
                hover:bg-red-700 w-1/2 py-2"
              onClick={() => retornar("/")}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="rounded text-white bg-indigo-400 
                           hover:bg-indigo-900 w-1/2 py-2
                           flex justify-center items-center"
              disabled={isLoading}
            >
              {isLoading ? (
                <RotatingLines
                  strokeColor="white"
                  strokeWidth="5"
                  animationDuration="0.75"
                  width="24"
                  visible={true}
                />
              ) : (
                <span>Cadastrar</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Cadastro;
