#!/bin/bash

# Script to create ovpnmanager user and configure sudo privileges

# Automatically determine the path to OpenVPN
OPENVPN_PATH=$(which openvpn)

# Check if OpenVPN is installed
if [ -z "$OPENVPN_PATH" ]; then
    echo "OpenVPN is not installed or not found in the PATH."
    exit 1
fi

# Function to create the ovpnmanager user
create_ovpnmanager_user() {
    sudo adduser --system --no-create-home --disabled-login ovpnmanager
}

# Function to configure sudo privileges
configure_sudo() {
    # Creating a temporary file
    TMP_FILE=$(mktemp)

    # Writing the configuration to the temporary file
    echo "ovpnmanager ALL=(ALL) NOPASSWD: $OPENVPN_PATH" > "$TMP_FILE"

    # Moving the temporary file to sudoers.d directory
    sudo mv "$TMP_FILE" /etc/sudoers.d/ovpnmanager

    # Setting appropriate permissions
    sudo chmod 0440 /etc/sudoers.d/ovpnmanager
}

# Main script execution
create_ovpnmanager_user
configure_sudo

echo "Setup complete."
