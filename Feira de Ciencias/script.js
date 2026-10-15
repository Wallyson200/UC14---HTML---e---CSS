document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navigation = document.getElementById("main-navigation");

  // MENU PARA CELULAR
  if (menuToggle && navigation) {
    const closeMenu = () => {
      navigation.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Abrir menu");
    };

    menuToggle.addEventListener("click", () => {
      const isOpen = navigation.classList.toggle("is-open");

      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Fechar menu" : "Abrir menu"
      );
    });

    navigation.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
        menuToggle.focus();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 850) {
        closeMenu();
      }
    });
  }

  // IMAGENS: ALTERNATIVA VISUAL QUANDO UMA FOTO NÃO CARREGA
  document.querySelectorAll(".history-image img").forEach((img) => {
    const showImageFallback = () => {
      img.closest(".history-image")?.classList.add("image-unavailable");
      img.alt =
        "Imagem indisponível no momento. Consulte o link da fonte na legenda.";
    };

    img.addEventListener("error", showImageFallback);

    if (img.complete && img.naturalWidth === 0) {
      showImageFallback();
    }
  });

  // VOLTAR AO INÍCIO
  const inicio = document.getElementById("inicio");

  document.querySelectorAll('a[href="#inicio"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      if (!inicio) return;

      event.preventDefault();

      const movimentoReduzido = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      inicio.scrollIntoView({
        behavior: movimentoReduzido ? "auto" : "smooth",
        block: "start"
      });

      if (window.location.hash !== "#inicio") {
        history.replaceState(null, "", "#inicio");
      }

      if (menuToggle && navigation) {
        navigation.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menu");
      }
    });
  });

  // ==================================================
  // QUIZ INTERATIVO — O GRITO POR LIBERDADE
  // ==================================================

  const quizForm = document.getElementById("quiz-form");
  const quizResult = document.getElementById("quiz-result");
  const quizSubmit = document.getElementById("quiz-submit");
  const quizRestart = document.getElementById("quiz-restart");
  const resultTitle = document.getElementById("result-title");
  const resultScore = document.getElementById("result-score");
  const resultMessage = document.getElementById("result-message");
  const progressText = document.getElementById("quiz-progress-text");
  const progressBar = document.getElementById("quiz-progress-bar");

  if (
    quizForm &&
    quizResult &&
    quizSubmit &&
    quizRestart &&
    resultTitle &&
    resultScore &&
    resultMessage &&
    progressText &&
    progressBar
  ) {
    const totalQuestions = 8;

    // Gabarito e explicações educativas.
    const answerKey = {
      q1: {
        correct: "B",
        explanation:
          "A censura, o autoritarismo e o medo dificultavam denúncias e a fiscalização de abusos."
      },
      q2: {
        correct: "A",
        explanation:
          "O pagamento por dia de internação podia criar incentivos financeiros para manter pessoas internadas por mais tempo."
      },
      q3: {
        correct: "A",
        explanation:
          "A Reforma Psiquiátrica valoriza os direitos humanos, a autonomia e o cuidado em liberdade."
      },
      q4: {
        correct: "A",
        explanation:
          "Em 1978, denúncias de trabalhadores ligados à DINSAM ajudaram a dar visibilidade aos problemas da assistência psiquiátrica."
      },
      q5: {
        correct: "C",
        explanation:
          "Serviços comunitários, como os CAPS, ajudam a oferecer cuidado próximo da vida cotidiana e dos vínculos sociais."
      },
      q6: {
        correct: "A",
        explanation:
          "A Carta de Bauru, de 1987, tornou-se um marco da luta por uma sociedade sem manicômios."
      },
      q7: {
        correct: "A",
        explanation:
          "A história do Hospital Colônia de Barbacena ficou marcada por denúncias de condições desumanas e graves violações de direitos."
      },
      q8: {
        correct: "C",
        explanation:
          "Franco Basaglia foi um psiquiatra italiano cujas ideias influenciaram a crítica ao modelo manicomial e a Reforma Psiquiátrica."
      }
    };

    let quizFinished = false;

    // Atualiza a contagem de respostas e a barra de progresso.
    const updateProgress = () => {
      const answeredQuestions = Object.keys(answerKey).filter((name) => {
        return quizForm.querySelector(
          `input[name="${name}"]:checked`
        );
      }).length;

      progressText.textContent =
        `${answeredQuestions} de ${totalQuestions} perguntas respondidas`;

      progressBar.style.width =
        `${(answeredQuestions / totalQuestions) * 100}%`;
    };

    // Atualiza o progresso enquanto a pessoa responde.
    quizForm.querySelectorAll('input[type="radio"]').forEach((input) => {
      input.addEventListener("change", () => {
        if (!quizFinished) {
          updateProgress();
        }
      });
    });

    // Corrige o quiz e apresenta o resultado final.
    quizForm.addEventListener("submit", (event) => {
      event.preventDefault();

      if (quizFinished) return;

      let score = 0;
      let unanswered = false;

      // Verificação adicional antes de corrigir.
      for (const questionName of Object.keys(answerKey)) {
        const selected = quizForm.querySelector(
          `input[name="${questionName}"]:checked`
        );

        if (!selected) {
          unanswered = true;
          break;
        }
      }

      if (unanswered) {
        progressText.textContent =
          "Responda às oito perguntas antes de conferir o resultado.";

        const firstUnanswered = Object.keys(answerKey).find((questionName) => {
          return !quizForm.querySelector(
            `input[name="${questionName}"]:checked`
          );
        });

        if (firstUnanswered) {
          const question = quizForm.querySelector(
            `input[name="${firstUnanswered}"]`
          );

          question?.focus();

          question?.closest(".quiz-question")?.scrollIntoView({
            behavior: "smooth",
            block: "center"
          });
        }

        return;
      }

      // Corrige cada pergunta individualmente.
      Object.entries(answerKey).forEach(([questionName, answer]) => {
        const fieldset = quizForm.querySelector(
          `[data-question="${questionName.slice(1)}"]`
        );

        const selected = quizForm.querySelector(
          `input[name="${questionName}"]:checked`
        );

        const correctInput = quizForm.querySelector(
          `input[name="${questionName}"][value="${answer.correct}"]`
        );

        if (!fieldset || !selected || !correctInput) return;

        const feedback = fieldset.querySelector(".question-feedback");

        fieldset.classList.remove("answer-correct", "answer-wrong");
        fieldset.classList.add("is-locked");

        // Destaca a alternativa correta.
        correctInput.closest(".quiz-option")?.classList.add("correct-option");

        if (selected.value === answer.correct) {
          score++;
          fieldset.classList.add("answer-correct");

          if (feedback) {
            feedback.textContent = `Resposta correta! ${answer.explanation}`;
          }
        } else {
          fieldset.classList.add("answer-wrong");
          selected.closest(".quiz-option")?.classList.add("wrong-option");

          if (feedback) {
            feedback.textContent =
              `Resposta correta: alternativa ${answer.correct}. ${answer.explanation}`;
          }
        }
      });

      // Impede alterações depois da correção.
      quizFinished = true;

      quizForm.querySelectorAll('input[type="radio"]').forEach((input) => {
        input.disabled = true;
      });

      quizSubmit.disabled = true;
      quizSubmit.textContent = "QUIZ CONCLUÍDO ✓";

      // Mostra a pontuação final.
      resultScore.textContent = `${score} de ${totalQuestions} pontos`;

      const percentage = (score / totalQuestions) * 100;

      if (percentage === 100) {
        resultTitle.textContent = "Gabaritou! 🏆";
        resultMessage.textContent =
          "Você acertou todas as perguntas! Seu conhecimento sobre a Luta Antimanicomial e a Reforma Psiquiátrica está em dia.";
      } else if (percentage >= 75) {
        resultTitle.textContent = "Mandou muito bem! 👏";
        resultMessage.textContent =
          "Você demonstrou um ótimo conhecimento do tema. Leia as explicações das respostas para reforçar ainda mais o que aprendeu.";
      } else if (percentage >= 50) {
        resultTitle.textContent = "Bom trabalho! 📚";
        resultMessage.textContent =
          "Você já conhece pontos importantes dessa história. Revise as respostas e explore novamente as seções do site para aprender mais.";
      } else {
        resultTitle.textContent = "Continue aprendendo! ✊";
        resultMessage.textContent =
          "Cada pergunta é uma oportunidade de aprender. Explore as seções históricas do site e tente novamente quando estiver pronto.";
      }

      progressText.textContent = "Quiz concluído!";
      progressBar.style.width = "100%";

      quizResult.hidden = false;
      quizResult.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
        block: "center"
      });
    });

    // Reinicia o quiz para uma nova tentativa.
    quizRestart.addEventListener("click", () => {
      quizForm.reset();
      quizFinished = false;

      quizForm.querySelectorAll(".quiz-question").forEach((fieldset) => {
        fieldset.classList.remove(
          "answer-correct",
          "answer-wrong",
          "is-locked"
        );

        const feedback = fieldset.querySelector(".question-feedback");

        if (feedback) {
          feedback.textContent = "";
        }
      });

      quizForm.querySelectorAll(".quiz-option").forEach((label) => {
        label.classList.remove("correct-option", "wrong-option");
      });

      quizForm.querySelectorAll('input[type="radio"]').forEach((input) => {
        input.disabled = false;
      });

      quizSubmit.disabled = false;
      quizSubmit.innerHTML = 'CONFERIR RESPOSTAS <span>→</span>';

      quizResult.hidden = true;

      resultTitle.textContent = "Seu resultado";
      resultScore.textContent = "";
      resultMessage.textContent = "";

      updateProgress();

      quizForm.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
        block: "start"
      });
    });

    // Estado inicial do quiz.
    updateProgress();
  }
});