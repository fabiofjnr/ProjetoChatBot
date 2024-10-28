require("dotenv").config();
const { Telegraf, Markup } = require("telegraf");
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
    ctx.reply(
        "😉 • Bem-vindo(a) ao GiniStudio! Como posso ajudar você hoje?",
        Markup.inlineKeyboard([
            [Markup.button.callback("🎸 • Venda de Instrumentos", "venda_instrumentos")],
            [Markup.button.callback("🔧 • Manutenção de Instrumentos", "manutencao_instrumentos")],
        ])
    );
});

bot.on("message", (ctx) => {
    ctx.reply(
        "😉 • Bem-vindo(a) ao GiniStudio! Como posso ajudar você hoje?",
        Markup.inlineKeyboard([
            [Markup.button.callback("🎸 • Venda de Instrumentos", "venda_instrumentos")],
            [Markup.button.callback("🔧 • Manutenção de Instrumentos", "manutencao_instrumentos")],
        ])
    );
});

bot.action("venda_instrumentos", (ctx) => {
    ctx.reply(
        `Explore nossa seleção de instrumentos de alta qualidade, com opções para iniciantes e profissionais. A música que você procura está aqui!\n\n` +
        `🎹 | Teclado Eletrônico - R$1200\nIdeal para iniciantes e músicos profissionais, com centenas de timbres e ritmos integrados.\n\n` +
        `🎻 | Violino Acústico - R$800\nSom clássico e rico em harmônicos, perfeito para orquestras e ensaios solos.\n\n` +
        `🎷 | Saxofone Alto - R$2500\nUm instrumento de alta qualidade para músicos que querem um som refinado e versátil.\n\n` +
        `🥁 | Bateria Completa - R$3000\nConjunto completo para quem quer dominar o ritmo e o som poderoso da bateria.\n\n` +
        `🎺 | Trompete de Latão - R$900\nA escolha ideal para quem busca clareza sonora e um toque clássico.\n\n` +
        `🎸 | Guitarra Elétrica - R$1500\nOtimizada para som potente e versátil. Desde rock até jazz, a escolha certa para qualquer estilo.\n\n` +
        `🎤 | Microfone Condensador - R$500\nAlta sensibilidade e clareza, ideal para gravações e performances ao vivo.\n\n` +
        `🎼 | Violão de Nylon - R$700\nExcelente para estudantes e profissionais, com som suave e resposta precisa.`,
        Markup.inlineKeyboard([
            Markup.button.callback("🎹", "comprar_teclado"),
            Markup.button.callback("🎻", "comprar_violino"),
            Markup.button.callback("🎷", "comprar_saxofone"),
            Markup.button.callback("🥁", "comprar_bateria"),
            Markup.button.callback("🎺", "comprar_trompete"),
            Markup.button.callback("🎸", "comprar_guitarra"),
            Markup.button.callback("🎤", "comprar_microfone"),
            Markup.button.callback("🎼", "comprar_violao"),
        ])
    );
});

bot.action("manutencao_instrumentos", (ctx) => {
    ctx.reply(
        `🔧 • Manutenção de Instrumentos\nCuidamos do seu instrumento com atenção e qualidade. Escolha o tipo de manutenção e garanta o som perfeito sempre!\n\n` +
        `🎸 | Guitarra Elétrica\nServiço completo de limpeza, ajustes de cordas e reparos no circuito elétrico.\n\n` +
        `🎹 | Teclado Eletrônico\nManutenção de teclas, regulagem de sensibilidade e reparos de componentes eletrônicos.\n\n` +
        `🎻 | Violino Acústico\nReparo do arco, afinação de peças e limpeza para o som clássico ideal.\n\n` +
        `🥁 | Bateria Completa\nAjustes de pele, afinação e regulagem de hardware para o melhor desempenho.\n\n` +
        `🎷 | Saxofone Alto\nRevisão completa, ajustes de chaves e regulagem para máxima qualidade sonora.\n\n` +
        `🎤 | Microfone Condensador\nLimpeza e ajustes internos para clareza de som em gravações.\n\n` +
        `🎼 | Violão de Nylon\nAjuste de cordas, limpeza e alinhamento do braço para conforto ao tocar.\n\n` +
        `🎺 | Trompete de Latão\nReparos de válvulas, limpeza e polimento para manter o brilho e som.`,
        Markup.inlineKeyboard([
            Markup.button.callback("🎸", "manutencao_guitarra"),
            Markup.button.callback("🎹", "manutencao_teclado"),
            Markup.button.callback("🎻", "manutencao_violino"),
            Markup.button.callback("🥁", "manutencao_bateria"),
            Markup.button.callback("🎷", "manutencao_saxofone"),
            Markup.button.callback("🎤", "manutencao_microfone"),
            Markup.button.callback("🎼", "manutencao_violao"),
            Markup.button.callback("🎺", "manutencao_trompete"),
        ])
    );
});

bot.action(/comprar_(.*)/, (ctx) => {
    ctx.reply("✅ • Sua seleção de compra foi bem-sucedida!\n\n🤩 • Obrigado por escolher o GiniStudio.");
});

bot.action(/manutencao_(.*)/, (ctx) => {
    ctx.reply("✅ • Seu pedido de manutenção foi registrado com sucesso!\n\n🤩 • Obrigado por confiar no GiniStudio.");
});

bot.launch();
console.log("O Bot está rodando!");
