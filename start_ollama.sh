#!/bin/bash
# Script para verificar y arrancar Ollama y el modelo deepseek-coder

# Verificar si el servicio Ollama está activo
if systemctl is-active --quiet ollama; then
    echo "Ollama está activo."
else
    echo "Ollama no está activo. Iniciando servicio..."
    sudo systemctl start ollama
    sleep 2
fi

# Verificar si el modelo deepseek-coder está disponible
if ollama list | grep -q "deepseek-coder"; then
    echo "El modelo deepseek-coder está disponible."
else
    echo "Descargando el modelo deepseek-coder..."
    ollama pull deepseek-coder
fi

# Probar que el modelo responde
RESPONSE=$(curl -s -X POST http://localhost:11434/api/generate -d '{"model": "deepseek-coder", "prompt": "Hola"}')
if echo "$RESPONSE" | grep -q "model"; then
    echo "El modelo deepseek-coder está listo para usarse."
else
    echo "Hubo un problema al iniciar el modelo deepseek-coder."
fi
